---
title: 新晋 Gopher 的开源加密库 Dongle 加入 Dromara 社区
author: Dongle
date: 2024-11-13
cover: /assets/img/news/Gopher-0-0.png
head:
  - - meta
    - name: 新闻
---

在现代计算领域，信息安全逐渐成为焦点话题。密码学，作为信息保护的关键技术之一，允许我们加密（保密）和解密（解密）数据。Golang 中有许多库可以帮助我们轻松实现这些功能，其中dongle（加密狗）是一个强大且广泛使用的库。本篇文章旨在深入探讨dongle库的使用，以及如何利用它执行常见的加密和解密任务。

![](/assets/img/news/Gopher-0-0.png)

**Dongle** https://github.com/dromara/dongle 是一个广泛使用的轻量级、语义化、对开发者友好的 golang 开源加密库，专为密码学和数据安全提供一系列强大的工具。这个项目旨在简化加密算法的实现，使得开发者能够专注于他们的应用逻辑，而不是底层的加密细节。以下将从多个方面介绍这个库：

  

#### 主要功能：

dongle 包含许多经典和现代的加密算法，如AES（高级加密标准）、RSA、DH（Diffie-Hellman）密钥交换，以及各种哈希函数（如MD5和SHA）。同时，它还提供了数字签名、随机数生成和其他一些有用的密码学操作。

#### 安装使用

```
// 使用 github 库
go get -u github.com/dromara/dongle

import (
    "github.com/dromara/dongle"
)

// 使用 gitee 库
go get -u gitee.com/dromara/dongle

import (
    "gitee.com/dromara/dongle"
)

// 使用 gitcode 库
go get -u gitcode.com/dromara/dongle

import (
    "gitcode.com/dromara/dongle"
)
```

#### 用法示例

#### 编码&解码

##### Hex 编码、解码

```
// 对字符串进行 hex 编码，输出字符串
dongle.Encode.FromString("hello world").ByHex().ToString() // 68656c6c6f20776f726c64
// 对字符串进行 hex 解码，输出字符串
dongle.Decode.FromString("68656c6c6f20776f726c64").ByHex().ToString() // hello world

// 对字节切片进行 hex 编码，输出字节切片
dongle.Encode.FromBytes([]byte("hello world")).ByHex().ToBytes() // []byte("68656c6c6f20776f726c64")
// 对字节切片进行 hex 解码，输出字节切片
dongle.Decode.FromBytes([]byte("68656c6c6f20776f726c64")).ByHex().ToBytes() // []byte("hello world")
```

##### Base16 编码、解码

```
// 对字符串进行 base16 编码，输出字符串
dongle.Encode.FromString("hello world").ByBase16().ToString() // 68656c6c6f20776f726c64
// 对字符串进行 base16 解码，输出字符串
dongle.Decode.FromString("68656c6c6f20776f726c64").ByBase16().ToString() // hello world

// 对字节切片进行 base16 编码，输出字节切片
dongle.Encode.FromBytes([]byte("hello world")).ByBase16().ToBytes() // []byte("68656c6c6f20776f726c64")
// 对字节切片进行 base16 解码，输出字节切片
dongle.Decode.FromBytes([]byte("68656c6c6f20776f726c64")).ByBase16().ToBytes() // []byte("hello world")
```

##### Base32 编码、解码

```
// 对字符进行 base32 编码，输出字符串
dongle.Encode.FromString("hello world").ByBase32().ToString() // NBSWY3DPEB3W64TMMQ======
// 对字符串进行 base32 解码，输出字符串
dongle.Decode.FromString("NBSWY3DPEB3W64TMMQ======").ByBase32().ToString() // hello world

// 对字节切片进行 base32 编码，输出字节切片
dongle.Encode.FromBytes([]byte("hello world")).ByBase32().ToBytes() // []byte("NBSWY3DPEB3W64TMMQ======")
// 对字节切片进行 base32 解码，输出字节切片
dongle.Decode.FromBytes([]byte("NBSWY3DPEB3W64TMMQ======")).ByBase32().ToBytes() // []byte("hello world")
```

##### Base45 编码、解码

```
// 对字符进行 base45 编码，输出字符串
dongle.Encode.FromString("hello world").ByBase45().ToString() // +8D VD82EK4F.KEA2
// 对字符串进行 base45 解码，输出字符串
dongle.Decode.FromString("+8D VD82EK4F.KEA2").ByBase45().ToString() // hello world

// 对字节切片进行 base45 编码，输出字节切片
dongle.Encode.FromBytes([]byte("hello world")).ByBase45().ToBytes() // []byte("+8D VD82EK4F.KEA2")
// 对字节切片进行 base45 解码，输出字节切片
dongle.Decode.FromBytes([]byte("+8D VD82EK4F.KEA2")).ByBase45().ToBytes() // []byte("hello world")
```

##### Base58 编码、解码

```
// 对字符进行 base58 编码，输出字符串
dongle.Encode.FromString("hello world").ByBase58().ToString() // StV1DL6CwTryKyV
// 对字符串进行 base58 解码，输出字符串
dongle.Decode.FromString("StV1DL6CwTryKyV").ByBase58().ToString() // hello world

// 对字节切片进行 base58 编码，输出字节切片
dongle.Encode.FromBytes([]byte("hello world")).ByBase58().ToBytes() // []byte("StV1DL6CwTryKyV")
// 对字节切片进行 base58 解码，输出字节切片
dongle.Decode.FromBytes([]byte("StV1DL6CwTryKyV")).ByBase58().ToBytes() // []byte("hello world")
```

##### Base62 编码、解码

```
// 对字符进行 base62 编码，输出字符串
dongle.Encode.FromString("hello world").ByBase62().ToString() // AAwf93rvy4aWQVw
// 对字符串进行 base62 解码，输出字符串
dongle.Decode.FromString("AAwf93rvy4aWQVw").ByBase62().ToString() // hello world

// 对字节切片进行 base62 编码，输出字节切片
dongle.Encode.FromBytes([]byte("hello world")).ByBase62().ToBytes() // []byte("AAwf93rvy4aWQVw")
// 对字节切片进行 base62 解码，输出字节切片
dongle.Decode.FromBytes([]byte("AAwf93rvy4aWQVw")).ByBase62().ToBytes() // []byte("hello world")
```

##### Base64 编码、解码

```
// 对字符串进行 base64 编码，输出字符串
dongle.Encode.FromString("hello world").ByBase64().ToString() // aGVsbG8gd29ybGQ=
// 对字符串进行 base64 解码，输出字符串
dongle.Decode.FromString("aGVsbG8gd29ybGQ=").ByBase64().ToString() // hello world

// 对字节切片进行 base64 编码，输出字节切片
dongle.Encode.FromBytes([]byte("hello world")).ByBase64().ToBytes() // []byte("aGVsbG8gd29ybGQ=")
// 对字节切片进行 base64 解码，输出字节切片
dongle.Decode.FromBytes([]byte("aGVsbG8gd29ybGQ=")).ByBase64().ToBytes() // []byte("hello world")
```

##### Base64URL 编码、解码

```
// 对 url 字符进行 base64 编码，输出字符串
dongle.Encode.FromString("www.gouguoyin.cn").ByBase64URL().ToString() // d3d3LmdvdWd1b3lpbi5jbg==
// 对 url 字符进行 base64 解码，输出字符串
dongle.Decode.FromString("d3d3LmdvdWd1b3lpbi5jbg==").ByBase64URL().ToString() // www.gouguoyin.cn

// 对 url 字节切片进行 base64 编码，输出字节切片
dongle.Encode.FromBytes([]byte("www.gouguoyin.cn")).ByBase64URL().ToBytes() // []byte("d3d3LmdvdWd1b3lpbi5jbg==")
// 对 url 字符进行 base64 解码，输出字节切片
dongle.Decode.FromBytes([]byte("d3d3LmdvdWd1b3lpbi5jbg==")).ByBase64URL().ToBytes() // []byte("www.gouguoyin.cn")
```

##### Base85 编码、解码

```
// 对字符串进行 base85 编码，输出字符串
dongle.Encode.FromString("hello world").ByBase85().ToString() // BOu!rD]j7BEbo7
// 对字符串进行 base85 解码，输出字符串
dongle.Decode.FromString("BOu!rD]j7BEbo7").ByBase85().ToString() // hello world

// 对字节切片进行 base85 编码，输出字节切片
dongle.Encode.FromBytes([]byte("hello world")).ByBase85().ToBytes() // []byte("BOu!rD]j7BEbo7")
// 对字节切片进行 base85 解码，输出字节切片
dongle.Decode.FromBytes([]byte("BOu!rD]j7BEbo7")).ByBase85().ToBytes() // []byte("hello world")
```

##### Base91 编码、解码

```
// 对字符串进行 base91 编码，输出字符串
dongle.Encode.FromString("hello world").ByBase91().ToString() // TPwJh>Io2Tv!lE
// 对字符串进行 base91 解码，输出字符串
dongle.Decode.FromString("TPwJh>Io2Tv!lE").ByBase91().ToString() // hello world

// 对字节切片进行 base91 编码，输出字节切片
dongle.Encode.FromBytes([]byte("hello world")).ByBase91().ToBytes() // []byte("TPwJh>Io2Tv!lE")
// 对字节切片进行 base91 解码，输出字节切片
dongle.Decode.FromBytes([]byte("BOu!rD]j7BEbo7")).ByBase91().ToBytes() // []byte("hello world")
```

##### Base100 编码、解码

```
// 对字符串进行 base100 编码，输出字符串
dongle.Encode.FromString("hello world").ByBase100().ToString() // 👟👜👣👣👦🐗👮👦👩👣👛
// 对字符串进行 base100 解码，输出字符串
dongle.Decode.FromString("👟👜👣👣👦🐗👮👦👩👣👛").ByBase100().ToString() // hello world

// 对字节切片进行 base100 编码，输出字节切片
dongle.Encode.FromBytes([]byte("hello world")).ByBase100().ToBytes() // []byte("👟👜👣👣👦🐗👮👦👩👣👛")
// 对字节切片进行 base100 解码，输出字节切片
dongle.Decode.FromBytes([]byte("👟👜👣👣👦🐗👮👦👩👣👛")).ByBase100().ToBytes() // []byte("hello world")
```

##### SafeURL 编码、解码

```
// 对 url 字符进行转义编码，输出字符串
dongle.Encode.FromString("www.gouguoyin.cn?sex=男&age=18").BySafeURL().ToString() // www.gouguoyin.cn%3Fsex%3D%E7%94%B7%26age%3D18
// 对 url 字符进行转义解码，输出字符串
dongle.Decode.FromString("www.gouguoyin.cn%3Fsex%3D%E7%94%B7%26age%3D18").BySafeURL().ToString() // www.gouguoyin.cn?sex=男&age=18

// 对 url 字节切片进行转义编码，输出字节切片
dongle.Encode.FromBytes([]byte("www.gouguoyin.cn?sex=男&age=18")).BySafeURL().ToBytes() // []byte("www.gouguoyin.cn%3Fsex%3D%E7%94%B7%26age%3D18")
// 对 url 字符进行转义解码，输出字节切片
dongle.Decode.FromBytes([]byte("www.gouguoyin.cn%3Fsex%3D%E7%94%B7%26age%3D18")).BySafeURL().ToBytes() // []byte("www.gouguoyin.cn?sex=男&age=18")
```

##### Morse 编码、解码

> 默认分隔符是 `/`

```
// 对字符串进行 morse 编码，输出字符串
dongle.Encode.FromString("dongle").ByMorse().ToString() // -../---/-./--./.-../.
// 对字符串进行 morse 解码，输出字符串
dongle.Decode.FromString("-../---/-./--./.-../.").ByMorse().ToString() // dongle

// 对字节切片进行 morse 编码，输出字节切片
dongle.Encode.FromBytes([]byte("dongle")).ByMorse("|").ToBytes() // []byte("-..|---|-.|--.|.-..|.")
// 对字节切片进行 morse 解码，输出字节切片
dongle.Decode.FromBytes([]byte("-..|---|-.|--.|.-..|.")).ByMorse("|").ToBytes() // []byte("dongle")
```

#### 加密&解密

##### Md2 加密

```
// 对字符串进行 md2 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByMd2().ToHexString() // d9cce882ee690a5c1ce70beff3a78c77
// 对字符串进行 md2 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByMd2().ToBase64String() // 2czogu5pClwc5wvv86eMdw==

// 对字节切片进行 md2 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByMd2().ToHexBytes() // []byte("d9cce882ee690a5c1ce70beff3a78c77")
// 对字节切片进行 md2 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByMd2().ToBase64Bytes() // []byte("2czogu5pClwc5wvv86eMdw==")

```

##### Md4 加密

```
// 对字符串进行 md4 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByMd4().ToHexString() // aa010fbc1d14c795d86ef98c95479d17
// 对字符串进行 md4 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByMd4().ToBase64String() // qgEPvB0Ux5XYbvmMlUedFw==

// 对字节切片进行 md4 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByMd4().ToHexBytes() // []byte("aa010fbc1d14c795d86ef98c95479d17")
// 对字节切片进行 md4 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByMd4().ToBase64Bytes() // []byte("qgEPvB0Ux5XYbvmMlUedFw==")

```

##### Md5 加密

```
// 对字符串进行 md5 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByMd5().ToHexString() // 5eb63bbbe01eeed093cb22bb8f5acdc3
// 对字符串进行 md5 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByMd5().ToBase64String() // XrY7u+Ae7tCTyyK7j1rNww==

// 对字节切片进行 md5 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByMd5().ToHexBytes() // []byte("5eb63bbbe01eeed093cb22bb8f5acdc3")
// 对字节切片进行 md5 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByMd5().ToBase64Bytes() // []byte("XrY7u+Ae7tCTyyK7j1rNww==")
```

##### Sha1 加密

```
// 对字符串进行 sha1 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").BySha1().ToHexString() // 2aae6c35c94fcfb415dbe95f408b9ce91ee846ed
// 对字符串进行 sha1 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").BySha1().ToBase64String() // Kq5sNclPz7QV2+lfQIuc6R7oRu0=

// 对字节切片进行 sha1 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).BySha1().ToHexBytes() // []byte("2aae6c35c94fcfb415dbe95f408b9ce91ee846ed")
// 对字节切片进行 sha1 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).BySha1().ToBase64Bytes() // []byte("Kq5sNclPz7QV2+lfQIuc6R7oRu0=")
```

##### Sha3 加密

> 包含 sha3-224, sha3-256, sha3-384, sha3-512

```
// 对字符串进行 sha3-224 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").Sha3(224).ToHexString() // dfb7f18c77e928bb56faeb2da27291bd790bc1045cde45f3210bb6c5
// 对字符串进行 sha3-224 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").Sha3(224).ToBase64String() // 37fxjHfpKLtW+ustonKRvXkLwQRc3kXzIQu2xQ==
// 对字节切片进行 sha3-224 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).Sha3(224).ToHexBytes() // []byte("dfb7f18c77e928bb56faeb2da27291bd790bc1045cde45f3210bb6c5")
// 对字节切片进行 sha3-224 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).Sha3(224).ToBase64Bytes() // []byte("37fxjHfpKLtW+ustonKRvXkLwQRc3kXzIQu2xQ==")

// 对字符串进行 sha3-256 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").Sha3(256).ToHexString() // 644bcc7e564373040999aac89e7622f3ca71fba1d972fd94a31c3bfbf24e3938
// 对字符串进行 sha3-256 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").Sha3(256).ToBase64String() // ZEvMflZDcwQJmarInnYi88px+6HZcv2Uoxw7+/JOOTg=
// 对字节切片进行 sha3-256 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).Sha3(256).ToHexBytes() // []byte("644bcc7e564373040999aac89e7622f3ca71fba1d972fd94a31c3bfbf24e3938")
// 对字节切片进行 sha3-256 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).Sha3(256).ToBase64Bytes() // []byte("ZEvMflZDcwQJmarInnYi88px+6HZcv2Uoxw7+/JOOTg=")

// 对字符串进行 sha3-384 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").Sha3(384).ToHexString() // 83bff28dde1b1bf5810071c6643c08e5b05bdb836effd70b403ea8ea0a634dc4997eb1053aa3593f590f9c63630dd90b
// 对字符串进行 sha3-384 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").Sha3(384).ToBase64String() // g7/yjd4bG/WBAHHGZDwI5bBb24Nu/9cLQD6o6gpjTcSZfrEFOqNZP1kPnGNjDdkL
// 对字节切片进行 sha3-384 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).Sha3(384).ToHexBytes() // []byte("83bff28dde1b1bf5810071c6643c08e5b05bdb836effd70b403ea8ea0a634dc4997eb1053aa3593f590f9c63630dd90b")
// 对字节切片进行 sha3-384 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).Sha3(384).ToBase64Bytes() // []byte("g7/yjd4bG/WBAHHGZDwI5bBb24Nu/9cLQD6o6gpjTcSZfrEFOqNZP1kPnGNjDdkL")

// 对字符串进行 sha3-512 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").Sha3(512).ToHexString() // 840006653e9ac9e95117a15c915caab81662918e925de9e004f774ff82d7079a40d4d27b1b372657c61d46d470304c88c788b3a4527ad074d1dccbee5dbaa99a
// 对字符串进行 sha3-512 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").Sha3(512).ToBase64String() // hAAGZT6ayelRF6FckVyquBZikY6SXengBPd0/4LXB5pA1NJ7GzcmV8YdRtRwMEyIx4izpFJ60HTR3MvuXbqpmg==
// 对字节切片进行 sha3-512 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).Sha3(512).ToHexBytes() // []byte("840006653e9ac9e95117a15c915caab81662918e925de9e004f774ff82d7079a40d4d27b1b372657c61d46d470304c88c788b3a4527ad074d1dccbee5dbaa99a")
// 对字节切片进行 sha3-512 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).Sha3(512).ToBase64Bytes() // []byte("hAAGZT6ayelRF6FckVyquBZikY6SXengBPd0/4LXB5pA1NJ7GzcmV8YdRtRwMEyIx4izpFJ60HTR3MvuXbqpmg==")

```

##### Sha224 加密

```
// 对字符串进行 sha224 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").BySha224().ToHexString() // 2f05477fc24bb4faefd86517156dafdecec45b8ad3cf2522a563582b
// 对字符串进行 sha224 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").BySha224().ToBase64String() // LwVHf8JLtPrv2GUXFW2v3s7EW4rTzyUipWNYKw==

// 对字节切片进行 sha224 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).BySha224().ToHexBytes() // []byte("2f05477fc24bb4faefd86517156dafdecec45b8ad3cf2522a563582b")
// 对字节切片进行 sha224 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).BySha224().ToBase64Bytes() // []byte("LwVHf8JLtPrv2GUXFW2v3s7EW4rTzyUipWNYKw==")
```

##### Sha256 加密

```
// 对字符串进行 sha256 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").BySha256().ToHexString() // b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
// 对字符串进行 sha256 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").BySha256().ToBase64String() // uU0nuZNNPgilLlLX2n2r+sSE7+N6U4DukIj3rOLvzek=

// 对字节切片进行 sha256 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).BySha256().ToHexBytes() // []byte("b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9")
// 对字节切片进行 sha256 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).BySha256().ToBase64Bytes() // []byte("uU0nuZNNPgilLlLX2n2r+sSE7+N6U4DukIj3rOLvzek=")
```

##### Sha384 加密

```
// 对字符串进行 sha384 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").BySha384().ToHexString() // fdbd8e75a67f29f701a4e040385e2e23986303ea10239211af907fcbb83578b3e417cb71ce646efd0819dd8c088de1bd
// 对字符串进行 sha384 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").BySha384().ToBase64String() // /b2OdaZ/KfcBpOBAOF4uI5hjA+oQI5IRr5B/y7g1eLPkF8txzmRu/QgZ3YwIjeG9

// 对字节切片进行 sha384 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).BySha384().ToHexBytes() // []byte("fdbd8e75a67f29f701a4e040385e2e23986303ea10239211af907fcbb83578b3e417cb71ce646efd0819dd8c088de1bd")
// 对字节切片进行 sha384 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).BySha384().ToBase64Bytes() // []byte("/b2OdaZ/KfcBpOBAOF4uI5hjA+oQI5IRr5B/y7g1eLPkF8txzmRu/QgZ3YwIjeG9")
```

##### Sha512 加密

> 包含 sha512, sha512-224, sha512-256

```
// 对字符串进行 sha512 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").BySha512().ToHexBytes() // 309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3ca86d4cd86f989dd35bc5ff499670da34255b45b0cfd830e81f605dcf7dc5542e93ae9cd76f
// 对字符串进行 sha512 加密，输出经过 base6 编码的字符串
dongle.Encrypt.FromString("hello world").BySha512().ToBase64String() // MJ7MSJwS1utMxA9QyQLytNDtd+5RGnx6m808qG1M2G+YndNbxf9JlnDaNCVbRbDP2DDoH2Bdz33FVC6TrpzXbw==
// 对字节切片进行 sha512 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).BySha512().ToHexBytes() // []byte("309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3ca86d4cd86f989dd35bc5ff499670da34255b45b0cfd830e81f605dcf7dc5542e93ae9cd76f")
// 对字节切片进行 sha512 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).BySha512().ToBase64Bytes() // []byte("MJ7MSJwS1utMxA9QyQLytNDtd+5RGnx6m808qG1M2G+YndNbxf9JlnDaNCVbRbDP2DDoH2Bdz33FVC6TrpzXbw==")

// 对字符串进行 sha512-224 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").BySha512(224).ToHexBytes() // 22e0d52336f64a998085078b05a6e37b26f8120f43bf4db4c43a64ee
// 对字符串进行 sha512-224 加密，输出经过 base6 编码的字符串
dongle.Encrypt.FromString("hello world").BySha512(224).ToBase64String() // IuDVIzb2SpmAhQeLBabjeyb4Eg9Dv020xDpk7g==
// 对字节切片进行 sha512-224 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).BySha512(224).ToHexBytes() // []byte("22e0d52336f64a998085078b05a6e37b26f8120f43bf4db4c43a64ee")
// 对字节切片进行 sha512-224 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).BySha512(224).ToBase64Bytes() // []byte("IuDVIzb2SpmAhQeLBabjeyb4Eg9Dv020xDpk7g==")

// 对字符串进行 sha512-256 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").BySha512(256).ToHexBytes() // 0ac561fac838104e3f2e4ad107b4bee3e938bf15f2b15f009ccccd61a913f017
// 对字符串进行 sha512-256 加密，输出经过 base6 编码的字符串
dongle.Encrypt.FromString("hello world").BySha512(256).ToBase64String() // CsVh+sg4EE4/LkrRB7S+4+k4vxXysV8AnMzNYakT8Bc=
// 对字节切片进行 sha512-256 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).BySha512(256).ToHexBytes() // []byte("0ac561fac838104e3f2e4ad107b4bee3e938bf15f2b15f009ccccd61a913f017")
// 对字节切片进行 sha512-256 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).BySha512(256).ToBase64Bytes() // []byte("CsVh+sg4EE4/LkrRB7S+4+k4vxXysV8AnMzNYakT8Bc=")
```

##### Shake128 加密

```
// 对字符串进行 shake128-256 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByShake128(256).ToHexString() // 3a9159f071e4dd1c8c4f968607c30942e120d8156b8b1e72e0d376e8871cb8b8
// 对字符串进行 shake128-256 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByShake128(256).ToBase64String() // OpFZ8HHk3RyMT5aGB8MJQuEg2BVrix5y4NN26IccuLg=
// 对字节切片进行 shake128-256 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByShake128(256).ToHexBytes() // []byte("3a9159f071e4dd1c8c4f968607c30942e120d8156b8b1e72e0d376e8871cb8b8")
// 对字节切片进行 shake128-256 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByShake128(256).ToBase64Bytes() // []byte("OpFZ8HHk3RyMT5aGB8MJQuEg2BVrix5y4NN26IccuLg=")

// 对字符串进行 shake128-512 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByShake128(512).ToHexString() // 3a9159f071e4dd1c8c4f968607c30942e120d8156b8b1e72e0d376e8871cb8b899072665674f26cc494a4bcf027c58267e8ee2da60e942759de86d2670bba1aa
// 对字符串进行 shake128-512 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByShake128(512).ToBase64String() // OpFZ8HHk3RyMT5aGB8MJQuEg2BVrix5y4NN26IccuLiZByZlZ08mzElKS88CfFgmfo7i2mDpQnWd6G0mcLuhqg==
// 对字节切片进行 shake128-512 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByShake128(512).ToHexBytes() // []byte("3a9159f071e4dd1c8c4f968607c30942e120d8156b8b1e72e0d376e8871cb8b899072665674f26cc494a4bcf027c58267e8ee2da60e942759de86d2670bba1aa")
// 对字节切片进行 shake128-512 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByShake128(512).ToBase64Bytes() // []byte("OpFZ8HHk3RyMT5aGB8MJQuEg2BVrix5y4NN26IccuLiZByZlZ08mzElKS88CfFgmfo7i2mDpQnWd6G0mcLuhqg==")
```

##### Shake256 加密

```
// 对字符串进行 shake256-384 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByShake256(384).ToHexString() // 369771bb2cb9d2b04c1d54cca487e372d9f187f73f7ba3f65b95c8ee7798c527f4f3c2d55c2d46a29f2e945d469c3df2
// 对字符串进行 shake256-384 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByShake256(384).ToBase64String() // Npdxuyy50rBMHVTMpIfjctnxh/c/e6P2W5XI7neYxSf088LVXC1Gop8ulF1GnD3y
// 对字节切片进行 shake256-384 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByShake256(384).ToHexBytes() // []byte("369771bb2cb9d2b04c1d54cca487e372d9f187f73f7ba3f65b95c8ee7798c527f4f3c2d55c2d46a29f2e945d469c3df2")
// 对字节切片进行 shake256-384 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByShake256(384).ToBase64Bytes() // []byte("Npdxuyy50rBMHVTMpIfjctnxh/c/e6P2W5XI7neYxSf088LVXC1Gop8ulF1GnD3y")

// 对字符串进行 shake256-512 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByShake256(512).ToHexString() // 369771bb2cb9d2b04c1d54cca487e372d9f187f73f7ba3f65b95c8ee7798c527f4f3c2d55c2d46a29f2e945d469c3df27853a8735271f5cc2d9e889544357116
// 对字符串进行 shake256-512 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByShake256(512).ToBase64String() // Npdxuyy50rBMHVTMpIfjctnxh/c/e6P2W5XI7neYxSf088LVXC1Gop8ulF1GnD3yeFOoc1Jx9cwtnoiVRDVxFg==
// 对字节切片进行 shake256-512 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByShake256(512).ToHexBytes() // []byte("369771bb2cb9d2b04c1d54cca487e372d9f187f73f7ba3f65b95c8ee7798c527f4f3c2d55c2d46a29f2e945d469c3df27853a8735271f5cc2d9e889544357116")
// 对字节切片进行 shake256-512 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByShake256(512).ToBase64Bytes() // []byte("Npdxuyy50rBMHVTMpIfjctnxh/c/e6P2W5XI7neYxSf088LVXC1Gop8ulF1GnD3yeFOoc1Jx9cwtnoiVRDVxFg==")
```

##### Ripemd160 加密

```
// 对字符串进行 ripemd160 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByRipemd160().ToHexString() // 98c615784ccb5fe5936fbc0cbe9dfdb408d92f0f
// 对字符串进行 ripemd160 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByRipemd160().ToBase64String() // mMYVeEzLX+WTb7wMvp39tAjZLw8=

// 对字节切片进行 ripemd160 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByRipemd160().ToHexBytes() // []byte("98c615784ccb5fe5936fbc0cbe9dfdb408d92f0f")
// 对字节切片进行 ripemd160 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByRipemd160().ToBase64Bytes() // []byte("mMYVeEzLX+WTb7wMvp39tAjZLw8=")
```

##### Blake2b 加密

> 包含 blake2b-256, blake2b-384, blake2b-512

```
// 对字符串进行 blake2b-256 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByBlake2b(256).ToHexBytes() // 256c83b297114d201b30179f3f0ef0cace9783622da5974326b436178aeef610
// 对字符串进行 blake2b-256 加密，输出经过 base6 编码的字符串
dongle.Encrypt.FromString("hello world").ByBlake2b(256).ToBase64String() // JWyDspcRTSAbMBefPw7wys6Xg2ItpZdDJrQ2F4ru9hA=
// 对字节切片进行 blake2b-256 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByBlake2b(256).ToHexBytes() // []byte("256c83b297114d201b30179f3f0ef0cace9783622da5974326b436178aeef610")
// 对字节切片进行 blake2b-256 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByBlake2b(256).ToBase64Bytes() // []byte("JWyDspcRTSAbMBefPw7wys6Xg2ItpZdDJrQ2F4ru9hA=")

// 对字符串进行 blake2b-384 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByBlake2b(384).ToHexBytes() // 8c653f8c9c9aa2177fb6f8cf5bb914828faa032d7b486c8150663d3f6524b086784f8e62693171ac51fc80b7d2cbb12b
// 对字符串进行 blake2b-384 加密，输出经过 base6 编码的字符串
dongle.Encrypt.FromString("hello world").ByBlake2b(384).ToBase64String() // jGU/jJyaohd/tvjPW7kUgo+qAy17SGyBUGY9P2UksIZ4T45iaTFxrFH8gLfSy7Er
// 对字节切片进行 blake2b-384 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByBlake2b(384).ToHexBytes() // []byte("8c653f8c9c9aa2177fb6f8cf5bb914828faa032d7b486c8150663d3f6524b086784f8e62693171ac51fc80b7d2cbb12b")
// 对字节切片进行 blake2b-384 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByBlake2b(384).ToBase64Bytes() // []byte("jGU/jJyaohd/tvjPW7kUgo+qAy17SGyBUGY9P2UksIZ4T45iaTFxrFH8gLfSy7Er")

// 对字符串进行 blake2b-512 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByBlake2b(512).ToHexBytes() // 021ced8799296ceca557832ab941a50b4a11f83478cf141f51f933f653ab9fbcc05a037cddbed06e309bf334942c4e58cdf1a46e237911ccd7fcf9787cbc7fd0
// 对字符串进行 blake2b-512 加密，输出经过 base6 编码的字符串
dongle.Encrypt.FromString("hello world").ByBlake2b(512).ToBase64String() // Ahzth5kpbOylV4MquUGlC0oR+DR4zxQfUfkz9lOrn7zAWgN83b7QbjCb8zSULE5YzfGkbiN5EczX/Pl4fLx/0A==
// 对字节切片进行 blake2b-512 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByBlake2b(512).ToHexBytes() // []byte("021ced8799296ceca557832ab941a50b4a11f83478cf141f51f933f653ab9fbcc05a037cddbed06e309bf334942c4e58cdf1a46e237911ccd7fcf9787cbc7fd0")
// 对字节切片进行 blake2b-512 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByBlake2b(512).ToBase64Bytes() // []byte("Ahzth5kpbOylV4MquUGlC0oR+DR4zxQfUfkz9lOrn7zAWgN83b7QbjCb8zSULE5YzfGkbiN5EczX/Pl4fLx/0A==")
```

##### Blake2s 加密

> 目前仅支持 blake2s-256

```
// 对字符串进行 blake2s-256 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByBlake2s(256).ToHexString() // 9aec6806794561107e594b1f6a8a6b0c92a0cba9acf5e5e93cca06f781813b0b
// 对字符串进行 blake2s-256 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByBlake2s(256).ToBase64String() // muxoBnlFYRB+WUsfaoprDJKgy6ms9eXpPMoG94GBOws=

// 对字节切片进行 blake2s-256 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByBlake2s(256).ToHexBytes() // []byte("9aec6806794561107e594b1f6a8a6b0c92a0cba9acf5e5e93cca06f781813b0b")
// 对字节切片进行 blake2s-256 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByBlake2s(256).ToBase64Bytes() // []byte("muxoBnlFYRB+WUsfaoprDJKgy6ms9eXpPMoG94GBOws=")
```

##### Hmac-md2 加密

```
// 对字符串进行 hmac-md2 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacMd2("dongle").ToHexString() // 88ed6ef9ab699d03a702f2a6fb1c0673
// 对字符串进行 hmac-md2 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacMd2("dongle").ToBase64String() // iO1u+atpnQOnAvKm+xwGcw==

// 对字节切片进行 hmac-md2 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacMd2([]byte("dongle")).ToHexBytes() // []byte("88ed6ef9ab699d03a702f2a6fb1c0673")
// 对字节切片进行 hmac-md2 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacMd2([]byte("dongle")).ToBase64Bytes() // []byte("iO1u+atpnQOnAvKm+xwGcw==")
```

##### Hmac-md4 加密

```
// 对字符串进行 hmac-md4 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacMd4("dongle").ToHexString() // 7a9df5247cbf76a8bc17c9c4f5a75b6b
// 对字符串进行 hmac-md4 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacMd4("dongle").ToBase64String() // ep31JHy/dqi8F8nE9adbaw==

// 对字节切片进行 hmac-md4 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacMd4([]byte("dongle")).ToHexBytes() // []byte("7a9df5247cbf76a8bc17c9c4f5a75b6b")
// 对字节切片进行 hmac-md4 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacMd4([]byte("dongle")).ToBase64Bytes() // []byte("ep31JHy/dqi8F8nE9adbaw==")
```

##### Hmac-md5 加密

```
// 对字符串进行 hmac-md5 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacMd5("dongle").ToHexString() // 4790626a275f776956386e5a3ea7b726
// 对字符串进行 hmac-md5 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacMd5("dongle").ToBase64String() // R5Biaidfd2lWOG5aPqe3Jg==

// 对字节切片进行 hmac-md5 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacMd5([]byte("dongle")).ToHexBytes() // []byte("4790626a275f776956386e5a3ea7b726")
// 对字节切片进行 hmac-md5 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacMd5([]byte("dongle")).ToBase64Bytes() // []byte("R5Biaidfd2lWOG5aPqe3Jg==")
```

##### Hmac-sha1 加密

```
// 对字符串进行 hmac-sha1 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha1("dongle").ToHexString() // 91c103ef93ba7420902b0d1bf0903251c94b4a62
// 对字符串进行 hmac-sha1 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha1("dongle").ToBase64String() // kcED75O6dCCQKw0b8JAyUclLSmI=

// 对字节切片进行 hmac-sha1 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha1([]byte("dongle")).ToHexBytes() // []byte("91c103ef93ba7420902b0d1bf0903251c94b4a62")
// 对字节切片进行 hmac-sha1 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha1([]byte("dongle")).ToBase64Bytes() // []byte("kcED75O6dCCQKw0b8JAyUclLSmI=")
```

##### Hmac-sha3 加密

> 包含 hmac-sha3-224, hmac-sha3-256, hmac-sha3-384, hmac-sha3-512

```
// 对字符串进行 hmac-sha3-224 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha3("dongle", 224).ToHexString() // fb8f061d9d1dddd2f5d3b9064a5e98e3e4b6df27ea93ce67627583ce
// 对字符串进行 hmac-sha3-224 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha3("dongle", 224).ToBase64String() // +48GHZ0d3dL107kGSl6Y4+S23yfqk85nYnWDzg==
// 对字节切片进行 hmac-sha3-224 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha3([]byte("dongle"), 224).ToHexBytes() // []byte("fb8f061d9d1dddd2f5d3b9064a5e98e3e4b6df27ea93ce67627583ce")
// 对字节切片进行 hmac-sha3-224 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha3([]byte("dongle"), 224).ToBase64Bytes() // []byte("+48GHZ0d3dL107kGSl6Y4+S23yfqk85nYnWDzg==")

// 对字符串进行 hmac-sha3-256 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha3("dongle", 256).ToHexString() // 8193367fde28cf5c460adb449a04b3dd9c184f488bdccbabf0526c54f90c4460
// 对字符串进行 hmac-sha3-256 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha3("dongle", 256).ToBase64String() // gZM2f94oz1xGCttEmgSz3ZwYT0iL3Mur8FJsVPkMRGA=
// 对字节切片进行 hmac-sha3-256 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha3([]byte("dongle"), 256).ToHexBytes() // []byte("8193367fde28cf5c460adb449a04b3dd9c184f488bdccbabf0526c54f90c4460")
// 对字节切片进行 hmac-sha3-256 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha3([]byte("dongle"), 256).ToBase64Bytes() // []byte("gZM2f94oz1xGCttEmgSz3ZwYT0iL3Mur8FJsVPkMRGA=")

// 对字符串进行 hmac-sha3-384 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha3("dongle", 384).ToHexString() // 3f76f5cda69cada3ee6b33f8458cd498b063075db263dd8b33f2a3992a8804f9569a7c86ffa2b8f0748babeb7a6fc0e7
// 对字符串进行 hmac-sha3-384 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha3("dongle", 384).ToBase64String() // P3b1zaacraPuazP4RYzUmLBjB12yY92LM/KjmSqIBPlWmnyG/6K48HSLq+t6b8Dn
// 对字节切片进行 hmac-sha3-384 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha3([]byte("dongle"), 384).ToHexBytes() // []byte("3f76f5cda69cada3ee6b33f8458cd498b063075db263dd8b33f2a3992a8804f9569a7c86ffa2b8f0748babeb7a6fc0e7")
// 对字节切片进行 hmac-sha3-384 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha3([]byte("dongle"), 384).ToBase64Bytes() // []byte("P3b1zaacraPuazP4RYzUmLBjB12yY92LM/KjmSqIBPlWmnyG/6K48HSLq+t6b8Dn")

// 对字符串进行 hmac-sha3-512 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha3("dongle", 512).ToHexString() // a99653d0407d659eccdeed43bb7cccd2e2b05a2c34fd3467c4198cf2ad26a466738513e88839fb55e64eb49df65bc52ed0fec2775bd9e086edd4fb4024add4a2
// 对字符串进行 hmac-sha3-512 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha3("dongle", 512).ToBase64String() // qZZT0EB9ZZ7M3u1Du3zM0uKwWiw0/TRnxBmM8q0mpGZzhRPoiDn7VeZOtJ32W8Uu0P7Cd1vZ4Ibt1PtAJK3Uog==
// 对字节切片进行 hmac-sha3-512 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha3([]byte("dongle"), 512).ToHexBytes() // []byte("a99653d0407d659eccdeed43bb7cccd2e2b05a2c34fd3467c4198cf2ad26a466738513e88839fb55e64eb49df65bc52ed0fec2775bd9e086edd4fb4024add4a2")
// 对字节切片进行 hmac-sha3-512 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha3([]byte("dongle"), 512).ToBase64Bytes() // []byte("qZZT0EB9ZZ7M3u1Du3zM0uKwWiw0/TRnxBmM8q0mpGZzhRPoiDn7VeZOtJ32W8Uu0P7Cd1vZ4Ibt1PtAJK3Uog==")
```

##### Hmac-sha224 加密

```
// 对字符串进行 hmac-sha224 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha224("dongle").ToHexString() // e15b9e5a7eccb1f17dc81dc07c909a891936dc3429dc0d940accbcec
// 对字符串进行 hmac-sha224 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha224("dongle").ToBase64String() // 4VueWn7MsfF9yB3AfJCaiRk23DQp3A2UCsy87A====

// 对字节切片进行 hmac-sha224 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha224([]byte("dongle")).ToHexBytes() // []byte("e15b9e5a7eccb1f17dc81dc07c909a891936dc3429dc0d940accbcec")
// 对字节切片进行 hmac-sha224 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha224([]byte("dongle")).ToBase64Bytes() // []byte("4VueWn7MsfF9yB3AfJCaiRk23DQp3A2UCsy87A==")
```

##### Hmac-sha256 加密

```
// 对字符串进行 hmac-sha256 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha256("dongle").ToHexString() // b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
// 对字符串进行 hmac-sha256 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha256("dongle").ToBase64String() // uU0nuZNNPgilLlLX2n2r+sSE7+N6U4DukIj3rOLvzek=

// 对字节切片进行 hmac-sha256 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha256([]byte("dongle")).ToHexBytes() // []byte("b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9")
// 对字节切片进行 hmac-sha256 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha256([]byte("dongle")).ToBase64Bytes() // []byte("uU0nuZNNPgilLlLX2n2r+sSE7+N6U4DukIj3rOLvzek=")
```

##### Hmac-sha384 加密

```
// 对字符串进行 hmac-sha384 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha384("dongle").ToHexString() // 421fcaa740216a31bbcd1f86f2212e0c68aa4b156a8ebc2ae55b3e75c4ee0509ea0325a0570ae739006b61d91d817fe8
// 对字符串进行 hmac-sha384 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha384("dongle").ToBase64String() // Qh/Kp0AhajG7zR+G8iEuDGiqSxVqjrwq5Vs+dcTuBQnqAyWgVwrnOQBrYdkdgX/o
// 对字节切片进行 hmac-sha384 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha384([]byte("dongle")).ToHexBytes() // []byte("421fcaa740216a31bbcd1f86f2212e0c68aa4b156a8ebc2ae55b3e75c4ee0509ea0325a0570ae739006b61d91d817fe8")
// 对字节切片进行 hmac-sha384 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha384([]byte("dongle")).ToBase64Bytes() // []byte("Qh/Kp0AhajG7zR+G8iEuDGiqSxVqjrwq5Vs+dcTuBQnqAyWgVwrnOQBrYdkdgX/o")
```

##### Hmac-sha512 加密

> 包含 hmac-sha512, hmac-sha512-224, hmac-sha512-256

```
// 对字符串进行 hmac-sha512 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha512("dongle").ToHexString() // d971b790bbc2a4ac81062bbffac693c9c234bae176c8faf5e304dbdb153032a826f12353964b4a4fb87abecd2dc237638a630cbad54a6b94b1f6ef5d5e2835d1
// 对字符串进行 hmac-sha512 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha512("dongle").ToBase64String() // 2XG3kLvCpKyBBiu/+saTycI0uuF2yPr14wTb2xUwMqgm8SNTlktKT7h6vs0twjdjimMMutVKa5Sx9u9dXig10Q==
// 对字节切片进行 hmac-sha512 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha512([]byte("dongle")).ToHexBytes() // []byte("d971b790bbc2a4ac81062bbffac693c9c234bae176c8faf5e304dbdb153032a826f12353964b4a4fb87abecd2dc237638a630cbad54a6b94b1f6ef5d5e2835d1")
// 对字节切片进行 hmac-sha512 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha512([]byte("dongle")).ToBase64Bytes() // []byte("2XG3kLvCpKyBBiu/+saTycI0uuF2yPr14wTb2xUwMqgm8SNTlktKT7h6vs0twjdjimMMutVKa5Sx9u9dXig10Q==")

// 对字符串进行 hmac-sha512-224 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha512("dongle", 224).ToHexString() // c4145bcc385c29f0e5683cd5450be9deb522d556de3b046a7ffa1eb3
// 对字符串进行 hmac-sha512-224 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha512("dongle", 224).ToBase64String() // xBRbzDhcKfDlaDzVRQvp3rUi1VbeOwRqf/oesw==
// 对字节切片进行 hmac-sha512-224 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha512([]byte("dongle"), 224).ToHexBytes() // []byte("c4145bcc385c29f0e5683cd5450be9deb522d556de3b046a7ffa1eb3")
// 对字节切片进行 hmac-sha512-224 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha512([]byte("dongle"), 224).ToBase64Bytes() // []byte("xBRbzDhcKfDlaDzVRQvp3rUi1VbeOwRqf/oesw==")

// 对字符串进行 hmac-sha512-256 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha512("dongle", 256).ToHexString() // e99fae71bcb43651ae10e952989eadf897faccb43966ee5122bb1b1d82f7a7c2
// 对字符串进行 hmac-sha512-256 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSha512("dongle", 256).ToBase64String() // 6Z+ucby0NlGuEOlSmJ6t+Jf6zLQ5Zu5RIrsbHYL3p8I=
// 对字节切片进行 hmac-sha512-256 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha512([]byte("dongle"), 256).ToHexBytes() // []byte("e99fae71bcb43651ae10e952989eadf897faccb43966ee5122bb1b1d82f7a7c2")
// 对字节切片进行 hmac-sha512-256 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha512([]byte("dongle"), 256).ToBase64Bytes() // []byte("6Z+ucby0NlGuEOlSmJ6t+Jf6zLQ5Zu5RIrsbHYL3p8I=")
```

##### Hmac-ripemd160 加密

```
// 对字符串进行 hmac-ripemd160 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacRipemd160("dongle").ToHexString() // 3691ad040e80c43dc6e8ffe9bc6ef3d5bd8786b8
// 对字符串进行 hmac-ripemd160 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacRipemd160("dongle").ToBase64String() // NpGtBA6AxD3G6P/pvG7z1b2Hhrg=

// 对字节切片进行 hmac-ripemd160 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacRipemd160([]byte("dongle")).ToHexBytes() // []byte("3691ad040e80c43dc6e8ffe9bc6ef3d5bd8786b8")
// 对字节切片进行 hmac-ripemd160 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacRipemd160([]byte("dongle")).ToBase64Bytes() // []byte("NpGtBA6AxD3G6P/pvG7z1b2Hhrg=")
```

##### Hmac-sm3 加密

```
// 对字符串进行 hmac-sm3 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSm3("dongle").ToHexString() // 8c733aae1d553c466a08c3e9e5daac3e99ae220181c7c1bc8c2564961de751b3
// 对字符串进行 hmac-sm3 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByHmacSm3("dongle").ToBase64String() // jHM6rh1VPEZqCMPp5dqsPpmuIgGBx8G8jCVklh3nUbM=

// 对字节切片进行 hmac-sm3 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSm3([]byte("dongle")).ToHexBytes() // []byte("8c733aae1d553c466a08c3e9e5daac3e99ae220181c7c1bc8c2564961de751b3")
// 对字节切片进行 hmac-sm3 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSm3([]byte("dongle")).ToBase64Bytes() // []byte("jHM6rh1VPEZqCMPp5dqsPpmuIgGBx8G8jCVklh3nUbM=")
```

##### Aes 加密、解密

```
cipher := dongle.NewCipher()
cipher.SetMode(dongle.CBC) // CBC、CFB、OFB、CTR、ECB
cipher.SetPadding(dongle.PKCS7) // No、Empty、Zero、PKCS5、PKCS7、AnsiX923、ISO97971
cipher.SetKey("0123456789abcdef") // key 长度必须是 16、24 或 32 字节
cipher.SetIV("0123456789abcdef") // iv 长度必须是 16 字节，ECB 模式不需要设置 iv

// 对字符串进行 aes 加密，输出未经编码的原始字符串
rawString := dongle.Encrypt.FromString("hello world").ByAes(cipher).ToRawString()
// 对未经编码的原始字符串进行 aes 解密，输出字符串
dongle.Decrypt.FromRawString(rawString).ByAes(cipher).ToString() // hello world

// 对字符串进行 aes 加密，输出经过 hex 编码的字符串
dongle.Encrypt.FromString("hello world").ByAes(cipher).ToHexString() // c1e9b4529aac9793010f4677f6358efe
// 对经过 hex 编码的字符串进行 aes 解密，输出字符串
dongle.Decrypt.FromHexString("c1e9b4529aac9793010f4677f6358efe").ByAes(cipher).ToString() // hello world

// 对字符串进行 aes 加密，输出经过 base64 编码的字符串
dongle.Encrypt.FromString("hello world").ByAes(cipher).ToBase64String() // wem0Upqsl5MBD0Z39jWO/g==
// 对经过 base64 编码的字符串进行 aes 解密，输出字符串
dongle.Decrypt.FromBase64String("wem0Upqsl5MBD0Z39jWO/g==").ByAes(cipher).ToString() // hello world

// 对字节切片进行 aes 加密，输出未经编码的原始字节切片
rawBytes := dongle.Encrypt.FromBytes([]byte("hello world")).ByAes(cipher).ToRawBytes()
// 对未经编码的原始字节切片进行 aes 解密，输出字节切片
dongle.Decrypt.FromRawBytes(rawBytes).ByAes(cipher).ToBytes() // []byte("hello world")

// 对字节切片进行 aes 加密，输出经过 hex 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByAes(cipher).ToHexBytes() // []byte("c1e9b4529aac9793010f4677f6358efe")
// 对经过 hex 编码的字节切片进行 aes 解密，输出字节切片
dongle.Decrypt.FromHexBytes([]byte("c1e9b4529aac9793010f4677f6358efe")).ByAes(cipher).ToBytes() // []byte("hello world")

// 对字节切片进行 aes 加密，输出经过 base64 编码的字节切片
dongle.Encrypt.FromBytes([]byte("hello world")).ByAes(cipher).ToBase64Bytes() // []byte("ZdgjvfHFgaHe0cukLgPKUg==")
// 对经过 base64 编码的字节切片进行 aes 解密，输出字节切片
dongle.Decrypt.FromBase64Bytes(()byte("wem0Upqsl5MBD0Z39jWO/g==")).ByAes(cipher).ToBytes() // []byte("hello world")
```

目前已支持的对称、非对称加密、哈希和消息认证码如下

*   \[x\] Hex 编码、解码
    
*   \[x\] Base16 编码、解码
    
*   \[x\] Base32 编码、解码
    
*   \[x\] Base45 编码、解码
    
*   \[x\] Base58 编码、解码
    
*   \[x\] Base62 编码、解码
    
*   \[x\] Base64 编码、解码
    
*   \[x\] Base64URL 编码、解码
    
*   \[x\] SafeURL 编码、解码
    
*   \[x\] Base85 编码、解码
    
*   \[x\] Base91 编码、解码
    
*   \[x\] Base100 编码、解码
    
*   \[x\] Morse 编码、解码
    
*   \[x\] Md2 加密
    
*   \[x\] Md4 加密
    
*   \[x\] Md5 加密
    
*   \[x\] Sha1 加密
    
*   \[x\] Sha3-224 加密
    
*   \[x\] Sha3-256 加密
    
*   \[x\] Sha3-384 加密
    
*   \[x\] Sha3-512 加密
    
*   \[x\] Sha224 加密
    
*   \[x\] Sha256 加密
    
*   \[x\] Sha384 加密
    
*   \[x\] Sha512 加密
    
*   \[x\] Sha512-224 加密
    
*   \[x\] Sha512-256 加密
    
*   \[x\] Shake128 加密
    
*   \[x\] Shake256 加密
    
*   \[x\] Ripemd160 加密
    
*   \[x\] Blake2b-256 加密
    
*   \[x\] Blake2b-384 加密
    
*   \[x\] Blake2b-512 加密
    
*   \[x\] Blake2s-256 加密
    
*   \[x\] Hmac-md2 加密
    
*   \[x\] Hmac-md4 加密
    
*   \[x\] Hmac-md5 加密
    
*   \[x\] Hmac-sha1 加密
    
*   \[x\] Hmac-sha3-224 加密
    
*   \[x\] Hmac-sha3-256 加密
    
*   \[x\] Hmac-sha3-384 加密
    
*   \[x\] Hmac-sha3-512 加密
    
*   \[x\] Hmac-sha224 加密
    
*   \[x\] Hmac-sha256 加密
    
*   \[x\] Hmac-sha384 加密
    
*   \[x\] Hmac-sha512 加密
    
*   \[x\] Hmac-sha512-224 加密
    
*   \[x\] Hmac-sha512-256 加密
    
*   \[x\] Hmac-ripemd160 加密
    
*   \[x\] Hmac-sm3 加密
    
*   \[ \] Rc2 加密、解密
    
*   \[x\] Rc4 加密、解密
    
*   \[ \] Rc5 加密、解密
    
*   \[ \] Rc6 加密、解密
    
*   \[x\] Tea 加密、解密
    
*   \[ \] Xtea 加密、解密
    
*   \[x\] Aes 加密、解密
    
*   \[x\] Blowfish 加密、解密
    
*   \[x\] Des 加密、解密
    
*   \[x\] 3Des 加密、解密
    
*   \[x\] Rsa 加密、解密
    
*   \[ \] Ecc 加密、解密
    
*   \[ \] Sm2 加密、解密
    
*   \[x\] Sm3 加密
    
*   \[ \] Sm4 加密、解密
    
*   \[ \] Sm7 加密、解密
    
*   \[ \] Sm9 加密、解密
    
*   \[x\] Bcrypt 签名、验签
    
*   \[x\] Ed25519 签名、验签
    
*   \[x\] Rsa 签名、验签
    
*   \[ \] Dsa 签名、验签
    

![](/assets/img/news/Gopher-0-1.png)

**Github: https://github.com/dromara/dongle**