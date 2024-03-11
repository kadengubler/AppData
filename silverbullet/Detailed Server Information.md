
```shell
$ uname -a 
Linux omv 5.10.0-0.deb10.16-amd64 #1 SMP Debian 5.10.127-2~bpo10+1 (2022-07-28) x86_64 GNU/Linux
```

```shell
$ lspci
00:00.0 Host bridge: Intel Corporation 5400 Chipset Memory Controller Hub (rev 20)
00:01.0 PCI bridge: Intel Corporation 5400 Chipset PCI Express Port 1 (rev 20)
00:05.0 PCI bridge: Intel Corporation 5400 Chipset PCI Express Port 5 (rev 20)
00:09.0 PCI bridge: Intel Corporation 5400 Chipset PCI Express Port 9 (rev 20)
00:0f.0 System peripheral: Intel Corporation 5400 Chipset QuickData Technology Device (rev 20)
00:10.0 Host bridge: Intel Corporation 5400 Chipset FSB Registers (rev 20)
00:10.1 Host bridge: Intel Corporation 5400 Chipset FSB Registers (rev 20)
00:10.2 Host bridge: Intel Corporation 5400 Chipset FSB Registers (rev 20)
00:10.3 Host bridge: Intel Corporation 5400 Chipset FSB Registers (rev 20)
00:10.4 Host bridge: Intel Corporation 5400 Chipset FSB Registers (rev 20)
00:11.0 Host bridge: Intel Corporation 5400 Chipset CE/SF Registers (rev 20)
00:15.0 Host bridge: Intel Corporation 5400 Chipset FBD Registers (rev 20)
00:15.1 Host bridge: Intel Corporation 5400 Chipset FBD Registers (rev 20)
00:16.0 Host bridge: Intel Corporation 5400 Chipset FBD Registers (rev 20)
00:16.1 Host bridge: Intel Corporation 5400 Chipset FBD Registers (rev 20)
00:1b.0 Audio device: Intel Corporation 631xESB/632xESB High Definition Audio Controller (rev 09)
00:1c.0 PCI bridge: Intel Corporation 631xESB/632xESB/3100 Chipset PCI Express Root Port 1 (rev 09)
00:1c.1 PCI bridge: Intel Corporation 631xESB/632xESB/3100 Chipset PCI Express Root Port 2 (rev 09)
00:1c.2 PCI bridge: Intel Corporation 631xESB/632xESB/3100 Chipset PCI Express Root Port 3 (rev 09)
00:1c.3 PCI bridge: Intel Corporation 631xESB/632xESB/3100 Chipset PCI Express Root Port 4 (rev 09)
00:1d.0 USB controller: Intel Corporation 631xESB/632xESB/3100 Chipset UHCI USB Controller #1 (rev 09)
00:1d.1 USB controller: Intel Corporation 631xESB/632xESB/3100 Chipset UHCI USB Controller #2 (rev 09)
00:1d.2 USB controller: Intel Corporation 631xESB/632xESB/3100 Chipset UHCI USB Controller #3 (rev 09)
00:1d.3 USB controller: Intel Corporation 631xESB/632xESB/3100 Chipset UHCI USB Controller #4 (rev 09)
00:1d.7 USB controller: Intel Corporation 631xESB/632xESB/3100 Chipset EHCI USB2 Controller (rev 09)
00:1e.0 PCI bridge: Intel Corporation 82801 PCI Bridge (rev d9)
00:1f.0 ISA bridge: Intel Corporation 631xESB/632xESB/3100 Chipset LPC Interface Controller (rev 09)
00:1f.1 IDE interface: Intel Corporation 631xESB/632xESB IDE Controller (rev 09)
00:1f.2 IDE interface: Intel Corporation 631xESB/632xESB/3100 Chipset SATA IDE Controller (rev 09)
00:1f.3 SMBus: Intel Corporation 631xESB/632xESB/3100 Chipset SMBus Controller (rev 09)
01:00.0 VGA compatible controller: NVIDIA Corporation G92 [GeForce 8800 GT] (rev a2)
03:00.0 PCI bridge: Intel Corporation 6311ESB/6321ESB PCI Express Upstream Port (rev 01)
03:00.3 PCI bridge: Intel Corporation 6311ESB/6321ESB PCI Express to PCI-X Bridge (rev 01)
04:00.0 PCI bridge: Intel Corporation 6311ESB/6321ESB PCI Express Downstream Port E1 (rev 01)
04:01.0 PCI bridge: Intel Corporation 6311ESB/6321ESB PCI Express Downstream Port E2 (rev 01)
04:02.0 PCI bridge: Intel Corporation 6311ESB/6321ESB PCI Express Downstream Port E3 (rev 01)
07:00.0 Ethernet controller: Intel Corporation 80003ES2LAN Gigabit Ethernet Controller (Copper) (rev 01)
07:00.1 Ethernet controller: Intel Corporation 80003ES2LAN Gigabit Ethernet Controller (Copper) (rev 01)
0b:00.0 PCI bridge: Texas Instruments XIO2213A/B/XIO2221 PCI Express to PCI Bridge [Cheetah Express] (rev 01)
0c:00.0 FireWire (IEEE 1394): Texas Instruments XIO2213A/B/XIO2221 IEEE-1394b OHCI Controller [Cheetah Express] (rev 01)
0d:00.0 Network controller: Broadcom Inc. and subsidiaries BCM4321 802.11a/b/g/n (rev 03)

```


```shell
$ lscpu
Architecture:        x86_64
CPU op-mode(s):      32-bit, 64-bit
Byte Order:          Little Endian
Address sizes:       38 bits physical, 48 bits virtual
CPU(s):              8
On-line CPU(s) list: 0-7
Thread(s) per core:  1
Core(s) per socket:  4
Socket(s):           2
NUMA node(s):        1
Vendor ID:           GenuineIntel
CPU family:          6
Model:               23
Model name:          Intel(R) Xeon(R) CPU           E5462  @ 2.80GHz
Stepping:            6
CPU MHz:             2394.269
CPU max MHz:         2800.0000
CPU min MHz:         2400.0000
BogoMIPS:            5586.13
Virtualization:      VT-x
L1d cache:           32K
L1i cache:           32K
L2 cache:            6144K
NUMA node0 CPU(s):   0-7
Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ht tm pbe syscall nx lm constant_tsc arch_perfmon pebs bts rep_good nopl cpuid aperfmperf pni dtes64 monitor ds_cpl vmx est tm2 ssse3 cx16 xtpr pdcm dca sse4_1 lahf_lm pti tpr_shadow vnmi flexpriority vpid dtherm
```


```shell
$ free -h
              total        used        free      shared  buff/cache   available
Mem:           23Gi       5.1Gi       304Mi       326Mi        18Gi        17Gi
Swap:         4.0Gi       1.0Gi       3.0Gi
```


```shell
$ lsblk

NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT

sda      8:0    0 111.8G  0 disk 

├─sda1   8:1    0 107.8G  0 part /

├─sda2   8:2    0     1K  0 part 

└─sda5   8:5    0     4G  0 part \[SWAP\]

sdb      8:16   0   2.7T  0 disk 

└─sdb1   8:17   0   2.7T  0 part /srv/dev-disk-by-label-Storage

sdc      8:32   0   1.8T  0 disk 

└─sdc1   8:33   0   1.8T  0 part /srv/dev-disk-by-label-Backup

sdd      8:48   1   239G  0 disk 

sr0     11:0    1  1024M  0 rom  

sr1     11:1    1  1024M  0 rom
```


```shell
$ ip addr show
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: enp7s0f0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:1f:5b:3c:bf:c0 brd ff:ff:ff:ff:ff:ff
    inet 10.0.0.4/24 brd 10.0.0.255 scope global dynamic enp7s0f0
       valid_lft 43645sec preferred_lft 43645sec
    inet6 fd3f:aaca:c646:384e:21f:5bff:fe3c:bfc0/64 scope global dynamic mngtmpaddr noprefixroute 
       valid_lft 1742sec preferred_lft 1742sec
    inet6 fe80::21f:5bff:fe3c:bfc0/64 scope link 
       valid_lft forever preferred_lft forever
3: enp7s0f1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:1f:5b:3c:bf:c1 brd ff:ff:ff:ff:ff:ff
    inet 10.0.0.5/24 brd 10.0.0.255 scope global dynamic enp7s0f1
       valid_lft 54437sec preferred_lft 54437sec
    inet6 fd3f:aaca:c646:384e:21f:5bff:fe3c:bfc1/64 scope global dynamic mngtmpaddr noprefixroute 
       valid_lft 1742sec preferred_lft 1742sec
    inet6 fe80::21f:5bff:fe3c:bfc1/64 scope link 
       valid_lft forever preferred_lft forever
4: br-2a49b641f5e2: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
    link/ether 02:42:5e:d4:e8:70 brd ff:ff:ff:ff:ff:ff
    inet 172.25.0.1/16 brd 172.25.255.255 scope global br-2a49b641f5e2
       valid_lft forever preferred_lft forever
5: br-3d87408fde4c: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
    link/ether 02:42:18:47:6e:c1 brd ff:ff:ff:ff:ff:ff
    inet 192.168.80.1/20 brd 192.168.95.255 scope global br-3d87408fde4c
       valid_lft forever preferred_lft forever
7: br-f24c1ebe5d35: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 02:42:31:72:67:8c brd ff:ff:ff:ff:ff:ff
    inet 172.28.0.1/16 brd 172.28.255.255 scope global br-f24c1ebe5d35
       valid_lft forever preferred_lft forever
    inet6 fe80::42:31ff:fe72:678c/64 scope link 
       valid_lft forever preferred_lft forever
8: br-050094e223b0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
    link/ether 02:42:09:0e:55:49 brd ff:ff:ff:ff:ff:ff
    inet 192.168.16.1/20 brd 192.168.31.255 scope global br-050094e223b0
       valid_lft forever preferred_lft forever
9: br-7f86e8f8f646: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
    link/ether 02:42:3d:e7:7e:81 brd ff:ff:ff:ff:ff:ff
    inet 172.29.0.1/16 brd 172.29.255.255 scope global br-7f86e8f8f646
       valid_lft forever preferred_lft forever
10: br-fb5e2ca74705: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 02:42:93:3d:c7:e6 brd ff:ff:ff:ff:ff:ff
    inet 172.20.0.1/16 brd 172.20.255.255 scope global br-fb5e2ca74705
       valid_lft forever preferred_lft forever
    inet6 fe80::42:93ff:fe3d:c7e6/64 scope link 
       valid_lft forever preferred_lft forever
11: br-2416c8938454: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
    link/ether 02:42:cb:7c:0e:1d brd ff:ff:ff:ff:ff:ff
    inet 192.168.32.1/20 brd 192.168.47.255 scope global br-2416c8938454
       valid_lft forever preferred_lft forever
12: br-56f943749799: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
    link/ether 02:42:bc:a7:76:89 brd ff:ff:ff:ff:ff:ff
    inet 192.168.240.1/20 brd 192.168.255.255 scope global br-56f943749799
       valid_lft forever preferred_lft forever
13: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 02:42:16:a1:9f:f4 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:16ff:fea1:9ff4/64 scope link 
       valid_lft forever preferred_lft forever
14: br-cdfc82e47026: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
    link/ether 02:42:c8:9b:b0:df brd ff:ff:ff:ff:ff:ff
    inet 192.168.192.1/20 brd 192.168.207.255 scope global br-cdfc82e47026
       valid_lft forever preferred_lft forever
15: br-363d263d8321: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 02:42:d8:ac:98:9b brd ff:ff:ff:ff:ff:ff
    inet 192.168.0.1/20 brd 192.168.15.255 scope global br-363d263d8321
       valid_lft forever preferred_lft forever
    inet6 fe80::42:d8ff:feac:989b/64 scope link 
       valid_lft forever preferred_lft forever
16: br-678c318919dc: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
    link/ether 02:42:ee:a0:58:42 brd ff:ff:ff:ff:ff:ff
    inet 192.168.48.1/20 brd 192.168.63.255 scope global br-678c318919dc
       valid_lft forever preferred_lft forever
17: br-a5eb80173ebb: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 02:42:19:1c:f2:f5 brd ff:ff:ff:ff:ff:ff
    inet 192.168.96.1/20 brd 192.168.111.255 scope global br-a5eb80173ebb
       valid_lft forever preferred_lft forever
    inet6 fe80::42:19ff:fe1c:f2f5/64 scope link 
       valid_lft forever preferred_lft forever
19: vethcc8a324@if18: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-fb5e2ca74705 state UP group default 
    link/ether 6e:32:8a:7f:07:b2 brd ff:ff:ff:ff:ff:ff link-netnsid 5
    inet6 fe80::6c32:8aff:fe7f:7b2/64 scope link 
       valid_lft forever preferred_lft forever
23: veth794790a@if22: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default 
    link/ether 62:24:c1:f4:8a:67 brd ff:ff:ff:ff:ff:ff link-netnsid 1
    inet6 fe80::6024:c1ff:fef4:8a67/64 scope link 
       valid_lft forever preferred_lft forever
25: veth998d851@if24: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-363d263d8321 state UP group default 
    link/ether 62:86:74:dd:02:82 brd ff:ff:ff:ff:ff:ff link-netnsid 3
    inet6 fe80::6086:74ff:fedd:282/64 scope link 
       valid_lft forever preferred_lft forever
27: veth4636c60@if26: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-f24c1ebe5d35 state UP group default 
    link/ether f6:70:40:ed:18:ca brd ff:ff:ff:ff:ff:ff link-netnsid 2
    inet6 fe80::f470:40ff:feed:18ca/64 scope link 
       valid_lft forever preferred_lft forever
31: veth02ebf37@if30: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-363d263d8321 state UP group default 
    link/ether 9a:70:86:d9:11:ee brd ff:ff:ff:ff:ff:ff link-netnsid 4
    inet6 fe80::9870:86ff:fed9:11ee/64 scope link 
       valid_lft forever preferred_lft forever
33: vethac3a114@if32: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-f24c1ebe5d35 state UP group default 
    link/ether 72:4a:de:37:2c:ba brd ff:ff:ff:ff:ff:ff link-netnsid 6
    inet6 fe80::704a:deff:fe37:2cba/64 scope link 
       valid_lft forever preferred_lft forever
35: vethb558c83@if34: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-fb5e2ca74705 state UP group default 
    link/ether ca:c7:ff:0d:63:4c brd ff:ff:ff:ff:ff:ff link-netnsid 9
    inet6 fe80::c8c7:ffff:fe0d:634c/64 scope link 
       valid_lft forever preferred_lft forever
37: veth29fd89b@if36: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-f24c1ebe5d35 state UP group default 
    link/ether 76:82:aa:cb:e8:47 brd ff:ff:ff:ff:ff:ff link-netnsid 11
    inet6 fe80::7482:aaff:fecb:e847/64 scope link 
       valid_lft forever preferred_lft forever
39: vethacc8bc1@if38: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-fb5e2ca74705 state UP group default 
    link/ether 0a:ee:48:81:12:ca brd ff:ff:ff:ff:ff:ff link-netnsid 8
    inet6 fe80::8ee:48ff:fe81:12ca/64 scope link 
       valid_lft forever preferred_lft forever
41: vethb295932@if40: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-fb5e2ca74705 state UP group default 
    link/ether 42:1a:4c:6f:b4:08 brd ff:ff:ff:ff:ff:ff link-netnsid 10
    inet6 fe80::401a:4cff:fe6f:b408/64 scope link 
       valid_lft forever preferred_lft forever
43: veth5f546d1@if42: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-fb5e2ca74705 state UP group default 
    link/ether 5a:8c:21:a9:1e:b7 brd ff:ff:ff:ff:ff:ff link-netnsid 12
    inet6 fe80::588c:21ff:fea9:1eb7/64 scope link 
       valid_lft forever preferred_lft forever
47: veth6d952c9@if46: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-fb5e2ca74705 state UP group default 
    link/ether 16:37:b9:cb:3e:e4 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet6 fe80::1437:b9ff:fecb:3ee4/64 scope link 
       valid_lft forever preferred_lft forever
49: vethd33c3ff@if48: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-fb5e2ca74705 state UP group default 
    link/ether b2:42:41:16:61:26 brd ff:ff:ff:ff:ff:ff link-netnsid 14
    inet6 fe80::b042:41ff:fe16:6126/64 scope link 
       valid_lft forever preferred_lft forever
51: veth3074a09@if50: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-fb5e2ca74705 state UP group default 
    link/ether 5a:08:66:4d:79:33 brd ff:ff:ff:ff:ff:ff link-netnsid 15
    inet6 fe80::5808:66ff:fe4d:7933/64 scope link 
       valid_lft forever preferred_lft forever
14487: br-c7b9c15f9871: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 02:42:4c:f3:5c:a7 brd ff:ff:ff:ff:ff:ff
    inet 192.168.176.1/20 brd 192.168.191.255 scope global br-c7b9c15f9871
       valid_lft forever preferred_lft forever
    inet6 fe80::42:4cff:fef3:5ca7/64 scope link 
       valid_lft forever preferred_lft forever
14507: vethc38ee69@if14506: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-c7b9c15f9871 state UP group default 
    link/ether f2:56:33:4c:33:02 brd ff:ff:ff:ff:ff:ff link-netnsid 18
    inet6 fe80::f056:33ff:fe4c:3302/64 scope link 
       valid_lft forever preferred_lft forever
3807: vethe1a02ad@if3806: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-fb5e2ca74705 state UP group default 
    link/ether 5e:48:58:12:d6:49 brd ff:ff:ff:ff:ff:ff link-netnsid 13
    inet6 fe80::5c48:58ff:fe12:d649/64 scope link 
       valid_lft forever preferred_lft forever
11765: veth81ebf0b@if11764: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-a5eb80173ebb state UP group default 
    link/ether 46:f9:37:87:a1:18 brd ff:ff:ff:ff:ff:ff link-netnsid 16
    inet6 fe80::44f9:37ff:fe87:a118/64 scope link 
       valid_lft forever preferred_lft forever
```


```shell
$ cat /etc/os-release 
PRETTY_NAME="Debian GNU/Linux 10 (buster)"
NAME="Debian GNU/Linux"
VERSION_ID="10"
VERSION="10 (buster)"
VERSION_CODENAME=buster
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"
```


```shell
$ docker version
Client: Docker Engine - Community
 Version:           25.0.3
 API version:       1.44
 Go version:        go1.21.6
 Git commit:        4debf41
 Built:             Tue Feb  6 21:14:14 2024
 OS/Arch:           linux/amd64
 Context:           default

Server: Docker Engine - Community
 Engine:
  Version:          25.0.3
  API version:      1.44 (minimum version 1.24)
  Go version:       go1.21.6
  Git commit:       f417435
  Built:            Tue Feb  6 21:14:14 2024
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.6.28
  GitCommit:        ae07eda36dd25f8a1b98dfbf587313b99c0190bb
 runc:
  Version:          1.1.12
  GitCommit:        v1.1.12-0-g51d5e94
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```


```shell
$ docker ps
CONTAINER ID   IMAGE                                     COMMAND                  CREATED        STATUS                         PORTS                                                                                                                                                                                                                                                                                                                                                                                                       NAMES
3476980da8e7   lscr.io/linuxserver/webtop:alpine-kde     "/init"                  46 hours ago   Up 46 hours                                                                                                                                                                                                                                                                                                                                                                                                                                webtop-debian
5237faca73ba   linuxserver/sonarr:latest                 "/init"                  46 hours ago   Up 46 hours                                                                                                                                                                                                                                                                                                                                                                                                                                sonarr
4fe7346ae659   linuxserver/radarr                        "/init"                  46 hours ago   Up 46 hours                                                                                                                                                                                                                                                                                                                                                                                                                                radarr
21103e2de65e   linuxserver/lazylibrarian                 "/init"                  46 hours ago   Up 46 hours                                                                                                                                                                                                                                                                                                                                                                                                                                lazylibrarian
8ea90c04115e   lscr.io/linuxserver/transmission:latest   "/init"                  46 hours ago   Up 46 hours                                                                                                                                                                                                                                                                                                                                                                                                                                transmission
d98a3f613dad   fallenbagel/jellyseerr:latest             "/sbin/tini -- yarn …"   46 hours ago   Up 46 hours                                                                                                                                                                                                                                                                                                                                                                                                                                jellyseerr
a5f250b9c712   linuxserver/jackett:latest                "/init"                  46 hours ago   Up 46 hours                                                                                                                                                                                                                                                                                                                                                                                                                                jackett
027199d88bce   ghcr.io/wfg/openvpn-client                "scripts/entry.sh"       46 hours ago   Up 46 hours (healthy)          0.0.0.0:3000->3000/tcp, :::3000->3000/tcp, 0.0.0.0:5055->5055/tcp, :::5055->5055/tcp, 0.0.0.0:5299->5299/tcp, :::5299->5299/tcp, 0.0.0.0:7878->7878/tcp, :::7878->7878/tcp, 0.0.0.0:8989->8989/tcp, :::8989->8989/tcp, 0.0.0.0:9091->9091/tcp, :::9091->9091/tcp, 0.0.0.0:9117->9117/tcp, :::9117->9117/tcp, 0.0.0.0:51413->51413/tcp, :::51413->51413/tcp, 0.0.0.0:51413->51413/udp, :::51413->51413/udp   openvpn-client
99aab9cee9ff   ghcr.io/linuxserver/wireguard             "/init"                  5 days ago     Up 5 days                      0.0.0.0:51820->51820/udp, :::51820->51820/udp                                                                                                                                                                                                                                                                                                                                                               wireguard
3facc24ae018   itsnoted/chatpad:latest                   "/docker-entrypoint.…"   11 days ago    Up 2 days                      0.0.0.0:8282->80/tcp, :::8282->80/tcp                                                                                                                                                                                                                                                                                                                                                                       chatpad
94938eba8619   authelia/authelia:latest                  "/app/entrypoint.sh …"   11 days ago    Restarting (1) 9 seconds ago                                                                                                                                                                                                                                                                                                                                                                                                               authelia
75a0c1727b83   zefhemel/silverbullet                     "/tini -- /docker-en…"   2 weeks ago    Up 6 days                      3000/tcp, 0.0.0.0:3006->3006/tcp, :::3006->3006/tcp                                                                                                                                                                                                                                                                                                                                                         silverbullet_entrata
4b9ebc76b48b   zefhemel/silverbullet                     "/tini -- /docker-en…"   2 weeks ago    Up 6 days                      3000/tcp, 0.0.0.0:3005->3005/tcp, :::3005->3005/tcp                                                                                                                                                                                                                                                                                                                                                         silverbullet
208116d0f17e   nginx                                     "/docker-entrypoint.…"   2 weeks ago    Up 6 days                      0.0.0.0:8082->80/tcp, :::8082->80/tcp                                                                                                                                                                                                                                                                                                                                                                       invoiceninja-server-1
53a2915ff71e   invoiceninja/invoiceninja:5               "docker-entrypoint s…"   2 weeks ago    Up 6 days                      9000/tcp                                                                                                                                                                                                                                                                                                                                                                                                    invoiceninja-app-1
df1b4f96456d   mysql:8                                   "docker-entrypoint.s…"   2 weeks ago    Up 6 days                      33060/tcp, 0.0.0.0:3305->3306/tcp, :::3305->3306/tcp                                                                                                                                                                                                                                                                                                                                                        invoiceninja-db-1
43d98d70dcbb   homeassistant/home-assistant:stable       "/init"                  8 weeks ago    Up 6 days                                                                                                                                                                                                                                                                                                                                                                                                                                  homeassistant
c2621d74e76d   zwavejs/zwavejs2mqtt:latest               "node server/bin/www"    2 months ago   Up 6 days                      0.0.0.0:8091->8091/tcp, :::8091->8091/tcp, 0.0.0.0:3030->3000/tcp, :::3030->3000/tcp                                                                                                                                                                                                                                                                                                                        zwavejs2mqtt
8627cffdacdb   koenkk/zigbee2mqtt                        "docker-entrypoint.s…"   2 months ago   Up 6 days                      0.0.0.0:8081->8080/tcp, :::8081->8080/tcp                                                                                                                                                                                                                                                                                                                                                                   zigbee2mqtt
33f53bfbf677   eclipse-mosquitto                         "/docker-entrypoint.…"   2 months ago   Up 6 days                      0.0.0.0:1883->1883/tcp, :::1883->1883/tcp, 0.0.0.0:9001->9001/tcp, :::9001->9001/tcp                                                                                                                                                                                                                                                                                                                        mosquitto
b74749847772   pihole/pihole:latest                      "/s6-init"               2 months ago   Up 6 days (healthy)            0.0.0.0:53->53/udp, :::53->53/udp, 0.0.0.0:53->53/tcp, 0.0.0.0:67->67/udp, :::53->53/tcp, :::67->67/udp, 0.0.0.0:4200->80/tcp, :::4200->80/tcp, 0.0.0.0:4210->443/tcp, :::4210->443/tcp                                                                                                                                                                                                                     pihole
a9084b6b5deb   lscr.io/linuxserver/duplicati:latest      "/init"                  2 months ago   Up 6 days                      0.0.0.0:8200->8200/tcp, :::8200->8200/tcp                                                                                                                                                                                                                                                                                                                                                                   duplicati
302cc1c521eb   jellyfin/jellyfin:latest                  "/jellyfin/jellyfin"     2 months ago   Up 6 days (healthy)            0.0.0.0:6100->8096/tcp, :::6100->8096/tcp                                                                                                                                                                                                                                                                                                                                                                   jellyfin
0d8a8ac4cfe2   ghcr.io/ajnart/homarr:latest              "sh ./scripts/run.sh"    2 months ago   Up 6 days (healthy)            0.0.0.0:7575->7575/tcp, :::7575->7575/tcp                                                                                                                                                                                                                                                                                                                                                                   homarr
17f6abcc6f75   linuxserver/swag:latest                   "/init"                  2 months ago   Up 6 days                      0.0.0.0:80->80/tcp, :::80->80/tcp, 0.0.0.0:443->443/tcp, :::443->443/tcp                                                                                                                                                                                                                                                                                                                                    swag
7830b5326ef2   ghcr.io/esphome/esphome                   "/entrypoint.sh dash…"   2 months ago   Up 6 days (healthy)                                                                                                                                                                                                                                                                                                                                                                                                                        esphome
550e254b8cc2   portainer/portainer-ce:latest             "/portainer"             2 months ago   Up 6 days                      0.0.0.0:8000->8000/tcp, :::8000->8000/tcp, 0.0.0.0:9443->9443/tcp, :::9443->9443/tcp, 9000/tcp                                                                                                                                                                                                                                                                                                              portainer


```
