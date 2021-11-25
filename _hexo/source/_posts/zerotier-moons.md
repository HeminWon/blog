---
title: zerotier 专用根服务器
date: 2021/10/28
---
#### 创建你自己的根服务器(亦称“月球”)

行星上的所有ZeroTier节点实际上都位于一个数据中心。这使得在任何地方直接连接设备变得很容易，但它的缺点是没有互联网连接就无法工作。网络连接也不一定完全可靠，有时出于安全原因，用户可能希望完全“air gap”互联网外的一组节点。

在1.2.0中，ZeroTier引入了添加用户自定义根服务器的功能。已有的数据中心是行星，用户定义的根服务器被称为**月球**。当节点“轨道”是月球时，它会将月球的根服务器添加到其(行星)根服务器中。绕月球运行的节点仍将使用行星根服务器，但如果它们看起来更快或没有其他东西可用，它们将使用月球的根服务器。

创建月球的第一步是部署一组根服务器。在大多数情况下，我们建议使用两个。这些是常规的ZeroTier节点，但总是打开并具有静态（物理）IP地址的节点。这些静态IP可以是全球互联网IP或只能在内部访问的物理内联网IP。在后一种情况下，你的月亮根在办公室外不起作用，但这无关紧要。漫游节点只会使用行星根服务器。

我们建议根服务器不要充当网络控制器、加入网络或执行任何其他重叠功能。他们需要良好的可靠网络连接，但在其他方面只需要很少的RAM、存储或CPU。根服务器可以是小型虚拟机、VPS或云实例，也可以是[树莓派](https://www.raspberrypi.org/)等小型设备。如果您将根服务器配置为虚拟机，请注意它们不会都驻留在同一个物理硬件上。这将违背建议两个的目的。

下一步是使用`zerotier-idtool`创建一个世界定义。您需要来自每个根服务器的theidentity`identity.public`文件。选择一个根（无论哪个），然后运行`zerotier-idtool initmoon <identity.public of one root> >>moon.json`。这个`zerotier-idtool`命令将向您的世界定义的JSON版本输出到标准输出，因此我们将它重定向到`moon.json`。

检查此文件。它将包含以下内容：

```
{
  "id": "deadbeef00",
  "objtype": "world",
  "roots": [
    {
      "identity": "deadbeef00:0:34031483094...",
      "stableEndpoints": []
    }
  ],
  "signingKey": "b324d84cec708d1b51d5ac03e75afba501a12e2124705ec34a614bf8f9b2c800f44d9824ad3ab2e3da1ac52ecb39ac052ce3f54e58d8944b52632eb6d671d0e0",
  "signingKey_SECRET": "ffc5dd0b2baf1c9b220d1c9cb39633f9e2151cf350a6d0e67c913f8952bafaf3671d2226388e1406e7670dc645851bf7d3643da701fd4599fedb9914c3918db3",
  "updatesMustBeSignedBy": "b324d84cec708d1b51d5ac03e75afba501a12e2124705ec34a614bf8f9b2c800f44d9824ad3ab2e3da1ac52ecb39ac052ce3f54e58d8944b52632eb6d671d0e0",
  "worldType": "moon"
}
```

世界ID在技术上是任意的，可以是任何随机的64位值。根据惯例，我们使用其中一个词根的地址。

世界定义的JSON文件包含**secrets**，因此将其保存在安全的地方很重要。signingKey_SECRET 将允许您将来自动更新世界定义。

现在添加其他根并定义它们的稳定端点。你最终会得到一些看起来像：

```
{
  "id": "deadbeef00",
  "objtype": "world",
  "roots": [
    {
      "identity": "deadbeef00:0:34031483094...",
      "stableEndpoints": [ "10.0.0.2/9993","2001:abcd:abcd::1/9993" ]
    },
    {
      "identity": "feedbeef11:0:83588158384...",
      "stableEndpoints": [ "10.0.0.3/9993","2001:abcd:abcd::3/9993" ]
    }
  ],
  "signingKey": "b324d84cec708d1b51d5ac03e75afba501a12e2124705ec34a614bf8f9b2c800f44d9824ad3ab2e3da1ac52ecb39ac052ce3f54e58d8944b52632eb6d671d0e0",
  "signingKey_SECRET": "ffc5dd0b2baf1c9b220d1c9cb39633f9e2151cf350a6d0e67c913f8952bafaf3671d2226388e1406e7670dc645851bf7d3643da701fd4599fedb9914c3918db3",
  "updatesMustBeSignedBy": "b324d84cec708d1b51d5ac03e75afba501a12e2124705ec34a614bf8f9b2c800f44d9824ad3ab2e3da1ac52ecb39ac052ce3f54e58d8944b52632eb6d671d0e0",
  "worldType": "moon"
}
```

您使用的静态IP地址必须可以从您希望这些根服务的所有位置访问。如果您要将这些部署到物理位置使用，请使用内部IP。如果您希望它们在场外可用，请使用DMZ的公共IP或将它们托管在数据中心附近的云提供商处。提供简单静态直接IP寻址和双堆栈IPv4/IPv6支持的低成本云主机，如[Digital Ocean](https://digitalocean.com/)、[Vultr](https://vultr.com/)和[Linode](https://linode.com/)，是托管根的理想场所。在大多数情况下，这些提供商的最低价格案例就足够了。

第三步是使用`zerotier-idtool genmoon moon.json`生成实际的签名世界。在这种情况下，这将生成一个名为000000`000000deadbeef00.moon`的文件。这不包含密钥，但由JSON文件中的秘密签名。

现在转到您的根目录，创建（如果不存在）他们工作目录的子目录（通常在Linux上为`/var/lib/zerotier-one`），称为 `moons.d`，并在那里复制签名的 moon 文件。现在重新启动根，它们应该可以准备好了。

您可以通过以下两种方式之一将这些根添加到常规节点：将相同的世界定义文件放在它们的 moons.d 目录中或使用 zerotier-cli orbit 命令：zerotier-cli track deadbeef00 deadbeef00。第一个参数是世界 ID（我们可以通过删除两个前导零来缩短它），第二个参数是其任何根的地址。如果它在线且可访问，这将联系根并从中获取完整的世界定义。

一旦你“轨道”了月球，试试`zerotier-cli listpeers`。您应该看到您创建的根被列为`MOON`而不是`LEAF`。它们现在将用作替代根服务器。
