# 💻 Computer Networking

## 📘 Definition
Computer networking is the process of **connecting two or more computers** to **share data, resources, and services** (like files, printers, or internet).

## 📡 Main Purpose
- Communication  
- Resource sharing  
- Data sharing  
- Remote access  

## 🔗 Types of Networks
1. **LAN (Local Area Network):** Small area (home, school).  
2. **MAN (Metropolitan Area Network):** Covers a city.  
3. **WAN (Wide Area Network):** Covers large areas (like the Internet).  

## 💻 Network Devices
- **Router:** Connects different networks.  
- **Switch:** Connects devices in a LAN.  
- **Hub:** Sends data to all devices.  
- **Modem:** Connects to the internet.  

## 🧠 Examples
- School computer lab network  
- Internet  
- Office network


---


# 🌐 IPv4 Address 

## 📘 Definition
IPv4 (Internet Protocol version 4) is the **4th version** of the Internet Protocol used to **identify devices on a network** using a **unique 32-bit address**.

## 🔢 Format
- Written as **four numbers** separated by dots (e.g., `192.168.1.1`)  
- Each number = **8 bits (1 byte)**  
- Total = **32 bits = 4 bytes**

## 📡 Address Range
`0.0.0.0` → `255.255.255.255`

## 🔗 Types of IPv4 Addresses
1. **Public IP:** Used on the internet.  
2. **Private IP:** Used inside local networks.  
3. **Static IP:** Fixed address.  
4. **Dynamic IP:** Changes automatically.

## 🏷️ Classes of IPv4
| Class | Range | Use |
|-------|--------|-----|
| A | 1.0.0.0 – 126.255.255.255 | Large networks |
| B | 128.0.0.0 – 191.255.255.255 | Medium networks |
| C | 192.0.0.0 – 223.255.255.255 | Small networks |
| D | 224.0.0.0 – 239.255.255.255 | Multicasting |
| E | 240.0.0.0 – 255.255.255.255 | Experimental |

## 💡 Example
`192.168.0.1` → Private IP (Class C)


---


# 🧠 Subnet Mask

## Definition
A **subnet mask** is a **32-bit number** that divides an IP address into two parts:
- **Network part** – identifies the network.  
- **Host part** – identifies the specific device in that network.

## 📘 Example
```
IP Address:   192.168.1.10  
Subnet Mask:  255.255.255.0  
Binary:       11111111.11111111.11111111.00000000
```
✅ The first 24 bits (1s) → Network  
✅ The last 8 bits (0s) → Host  


## 📊 Purpose
- To separate **networks** and **hosts**  
- To use IP addresses efficiently  
- To improve **network management** and **security**

## 🧩 Common Subnet Masks
| CIDR | Subnet Mask        | No. of Hosts |
|------|--------------------|---------------|
| /8   | 255.0.0.0          | 16,777,214    |
| /16  | 255.255.0.0        | 65,534        |
| /24  | 255.255.255.0      | 254           |


## ⚙️ Formula to Find Hosts
```
Hosts = 2^(32 - Network bits) - 2
```

**Example:**  
For `/24` → `2^(32 - 24) - 2 = 254 hosts`


---


# 🌍 Domain Name System (DNS)

## 📘 Definition
DNS (Domain Name System) is a **naming system** that **converts domain names** (like `www.google.com`) into **IP addresses** that computers use to identify each other on the internet.

## 🌍 Purpose
- Makes it easier to access websites without remembering IPs.  
- Acts like the **“phonebook” of the internet**.

## 🔗 How It Works
1. User types a website name.  
2. DNS server translates the name into an IP address.  
3. Browser connects to that IP to load the website.

## 🧠 Important Terms
- **Domain Name:** Human-readable name (e.g., `google.com`)  
- **DNS Server:** Translates domain to IP  
- **IP Address:** Numerical address of a website  
- **Resolver:** Finds the IP address requested by the user  

## 🏷️ Hierarchy of DNS
1. **Root Domain (.)**  
2. **Top-Level Domain (TLD):** `.com`, `.org`, `.in`  
3. **Second-Level Domain:** `google` in `google.com`  
4. **Subdomain:** `mail.google.com`

## 💡 Example
`www.yahoo.com` → DNS → `98.137.11.163`


---


# 🧠 How DNS Servers Work

## 📘 Definition
DNS servers are systems that **translate domain names into IP addresses** so browsers can locate and connect to websites.

## ⚙️ Working Steps (Process)
1. **User Request:**  
   You type `www.google.com` in the browser.  
2. **DNS Resolver:**  
   The request goes to a **DNS resolver** (usually your ISP’s server).  
3. **Root Server:**  
   Resolver asks the **Root DNS Server** where to find the Top-Level Domain (TLD) server (`.com`).  
4. **TLD Server:**  
   TLD server gives the address of the **Authoritative DNS Server** for `google.com`.  
5. **Authoritative Server:**  
   It provides the **actual IP address** of `www.google.com`.  
6. **Browser Connects:**  
   The resolver sends that IP back to your browser, which connects to the website.

## 💡 Example
`www.google.com` → DNS Resolver → Root Server → TLD Server → Authoritative Server → IP Address → Website loads

## 🧠 Key Servers in DNS Process
- **Resolver:** Finds IP on behalf of the user.  
- **Root Server:** Directs to correct TLD server.  
- **TLD Server:** Points to the domain’s authoritative server.  
- **Authoritative Server:** Holds the final IP information.


---


# 🔢 Port Numbers

## 📘 Definition
A **port number** is a **numerical identifier** that helps a computer **distinguish between different types of network services or processes** running on the same device.

## 💡 Purpose
- Allows multiple network applications to use the same IP address.  
- Identifies **specific services** (like web, email, FTP).

## 🔢 Range of Port Numbers
- **0 – 65535** (Total 65,536 ports)

## 🧩 Types of Ports
1. **Well-known Ports (0–1023):** Used by common services  
   - HTTP → 80  
   - HTTPS → 443  
   - FTP → 21  
   - SSH → 22  
   - DNS → 53  
2. **Registered Ports (1024–49151):** Used by user or custom apps  
3. **Dynamic / Private Ports (49152–65535):** Temporary ports for client communication  

## 🌐 Example
`https://www.example.com:443` → Port 443 used for HTTPS

## 📦 Note
Each application on a device uses a **unique port number** to send and receive data.


---


# 🌐 Network Interfaces

## 📘 Definition
A **network interface** is the **point of connection** between a computer and a network. It allows the device to **send and receive data** over that network.

## 💡 Purpose
- Connects a device to LAN, WAN, or the internet.  
- Handles communication between hardware and network software.

## 🧩 Types of Network Interfaces
1. **Wired Interface:** Uses cables (like Ethernet).  
2. **Wireless Interface:** Uses Wi-Fi or Bluetooth.  
3. **Virtual Interface:** Created by software (e.g., VPN, virtual machines).

## 💻 Examples
- **Ethernet card (NIC)** – for wired connection  
- **Wi-Fi adapter** – for wireless connection  
- **Loopback interface (127.0.0.1)** – for internal testing

## ⚙️ NIC (Network Interface Card)
- Hardware device that provides network connectivity.  
- Has a unique **MAC address** (Media Access Control).


---


# 🏷️ MAC Address

## 📘 Definition
A **MAC address** (Media Access Control address) is a **unique hardware identifier** assigned to a device’s **network interface card (NIC)** for communication within a network.

## 🔢 Format
- 48-bit (6 bytes) address.  
- Written in **hexadecimal**, divided by colons or hyphens.  
  👉 Example: `00:1A:2B:3C:4D:5E`

## 💡 Purpose
- Identifies devices uniquely on a local network.  
- Used in data link layer (Layer 2) of the OSI model.  
- Helps in transferring data packets within the same network.

## 🧩 Types of MAC Address
1. **Unicast:** Identifies a single device.  
2. **Multicast:** For a group of devices.  
3. **Broadcast:** For all devices in a network.

## ⚙️ Key Points
- Assigned by the device manufacturer.  
- Cannot be changed (but can be spoofed).  
- Works within **LAN**, not over the internet.


---


# 🔥 Firewalls

## 📘 Definition
A **firewall** is a **security system** that **monitors and controls incoming and outgoing network traffic** based on **predefined security rules**.

## 💡 Purpose
- Protects a computer or network from **unauthorized access**.  
- Blocks **malicious traffic** and allows **safe communication**.

## 🧩 Types of Firewalls
1. **Packet Filtering Firewall:** Checks each data packet and allows or blocks it.  
2. **Proxy Firewall:** Acts as a gateway between users and the internet.  
3. **Stateful Inspection Firewall:** Monitors the state of active connections.  
4. **Next-Generation Firewall (NGFW):** Advanced; includes antivirus, intrusion prevention, etc.

## 🌐 Works On
- **Network Layer** and **Transport Layer** of the OSI model.

## ⚙️ Functions
- Filters harmful data packets.  
- Prevents hacking and malware attacks.  
- Monitors all incoming/outgoing traffic.

## 💡 Examples
- Windows Defender Firewall  
- Cisco ASA


---


# 🌐 OSI Model

## 📘 Definition
The **OSI (Open Systems Interconnection) model** is a **conceptual framework** that defines **how data travels** through a network in **7 layers**.

## 💡 Purpose
- Helps understand and design network communication.  
- Standardizes how devices communicate.

## 🔢 7 Layers of OSI Model (Top to Bottom)
1. **Application (Layer 7):** User interface (e.g., HTTP, FTP).  
2. **Presentation (Layer 6):** Data translation, encryption, compression.  
3. **Session (Layer 5):** Manages sessions and connections.  
4. **Transport (Layer 4):** Ensures reliable data transfer (TCP/UDP).  
5. **Network (Layer 3):** Handles IP addressing and routing.  
6. **Data Link (Layer 2):** Error detection, MAC addressing.  
7. **Physical (Layer 1):** Transmission of raw bits (cables, signals).

## 🧠 Mnemonic
👉 *All People Seem To Need Data Processing* (Top to Bottom)


---


# ✅ TCP/IP Model

## 📘 Definition:
The **TCP/IP model (Transmission Control Protocol / Internet Protocol)** is a networking framework used to connect devices on the internet.  
It defines how data is transmitted and received.


## 💡 Purpose:
- Basis of the modern Internet.  
- Helps computers communicate over networks reliably.


## 🔢 Layers of TCP/IP Model (4 Layers):

1. **Application Layer** – User interaction (HTTP, FTP, DNS, SMTP).  
2. **Transport Layer** – Reliable delivery (TCP, UDP).  
3. **Internet Layer** – Handles addressing and routing (IP).  
4. **Network Access Layer** – Physical transmission (Ethernet, Wi-Fi).



## 🧠 Mnemonic:
👉 **A Tiny Intelligent Network**  
*(Application → Transport → Internet → Network Access)*



## 📦 Comparison with OSI Model:

| TCP/IP Layer       | OSI Layers                          |
|--------------------|-------------------------------------|
| Application         | Application, Presentation, Session  |
| Transport           | Transport                           |
| Internet            | Network                             |
| Network Access      | Data Link, Physical                 |


## 💡 Example Protocols:

- **Application Layer:** HTTP, FTP, DNS  
- **Transport Layer:** TCP, UDP  
- **Internet Layer:** IP, ICMP  
- **Network Access Layer:** Ethernet, Wi-Fi


---


# ✅ Network Topologies

## 📘 Definition:
Network topology refers to the layout or arrangement of devices (nodes) and how they are connected in a network.


## 💡 Types:
1. **Bus** – One main cable; cheap but hard to troubleshoot.  
2. **Star** – All connect to a hub; reliable.  
3. **Ring** – Circular connection; one failure affects all.  
4. **Mesh** – Every device connected to all; costly but strong.  
5. **Tree** – Hierarchical mix of star + bus.  
6. **Hybrid** – Combo of topologies; flexible & scalable.


---


# ✅ TCP and UDP

## 📘 Definition:
**TCP (Transmission Control Protocol)** and **UDP (User Datagram Protocol)** are **Transport Layer protocols** used for data transmission over the Internet.


## 💡 TCP (Transmission Control Protocol):
- **Connection-oriented** – establishes a connection before data transfer.  
- **Reliable** – ensures data is delivered in order.  
- **Error checking & flow control** available.  
- **Slower** but **accurate**.  
- 3-way handshake (connection setup)
- Acknowledgments (ACKs)
- 📦 *Used in:* Web (HTTP/HTTPS), Email (SMTP), File transfer (FTP).


## 💨 UDP (User Datagram Protocol):
- **Connectionless** – no setup before sending data.  
- **Unreliable** – data may be lost or out of order.  
- **No error checking or acknowledgment.**  
- **Faster** but less reliable.  
- 🎮 *Used in:* Video streaming, online games, voice calls (VoIP).


## 🧠 Key Difference:

| Feature | TCP | UDP |
|----------|-----|-----|
| Connection | Connection-oriented | Connectionless |
| Reliability | Reliable | Unreliable |
| Speed | Slower | Faster |
| Error Checking | Yes | No |
| Example | HTTP, FTP | DNS, YouTube, Games |



---


# 🖥️ Accessing Remote Terminal Using SSH

## 🔹 What is SSH?
- **SSH (Secure Shell)** is a protocol used to securely connect to remote systems.
- It allows you to **access, control, and manage** another computer over the internet or a network.

## 🔹 How it Works
1. Connect using:
   ```bash
   ssh username@remote_ip
   ```
2. Authenticate using password or SSH key.
3. Gain remote terminal access to run commands.

## 🔹 Benefits
- 🔒 Encrypted and secure  
- 🧑‍💻 Remote management  
- 🧱 Protects against data interception  


---


# 📂 Transferring Files Using SCP

## 🔹 What is SCP?
- **SCP (Secure Copy Protocol)** securely copies files between **local and remote systems**.
- It uses SSH for secure data transfer.

## 🔹 Basic Commands
- **Upload (local → remote):**
  ```bash
  scp file.txt username@remote_ip:/path/to/destination
  ```

- **Download (remote → local):**
  ```bash
  scp username@remote_ip:/path/to/file.txt /local/path
  ```

- **Copy folder (recursive):**
  ```bash
  scp -r folder username@remote_ip:/path/to/destination
  ```

## 🔹 Benefits
- 🔒 Secure with SSH encryption  
- ⚡ Fast and easy for file transfers  


---


# 🔑 SSH Public and Private Keys

## 🔹 Key Pair Concept
- SSH uses **asymmetric encryption** with two keys:
  - **Public Key:** Shared with the server  
  - **Private Key:** Kept secret on your local system

## 🔹 Authentication Process
1. Generate key pair:
   ```bash
   ssh-keygen
   ```
2. Copy public key to the server:
   ```bash
   ssh-copy-id username@remote_ip
   ```
3. SSH verifies your **private key** to log in without a password.

## 🔹 Advantages
- 🚫 No password needed for every login  
- 🔒 More secure than password authentication  
- 🧩 Protects against brute-force attacks  


# 🧠 Summary

| Concept | Purpose | Command Example |
|----------|----------|----------------|
| **SSH** | Remote terminal access | `ssh user@ip` |
| **SCP** | Secure file transfer | `scp file user@ip:/path` |
| **SSH Keys** | Passwordless secure login | `ssh-keygen`, `ssh-copy-id` |
