---
slug: asahi-linux-march-2024
authors:
  - danslinky
date: 2024-04-09
pin: true
categories:
- blog
tags:
- blog
- linux
- asahi
- apple
- macos
---

# The Dawn of Asahi: Reigniting my Love Affair with Linux

I :heart: :simple-asahilinux: ; probably the best Linux installation I have [ever](http://localhost:8000/resumes/markdown/index.html#technical-student-cern-switzerland-2007-2008-linux-pxe-tftpboot-ia64-perl-xmlrpc-oracle "Link to Dan Slinky's experience working at CERN IT Department") performed.

<!-- more -->

It all started with a moment of frustration, a tipping point reached after battling the bloat of :simple-macos:. One day, fueled by determination and a touch of recklessness, I decided to take matters into my own hands. Armed with nothing but a `Terminal.app` and `curl`, I embarked on a journey that would redefine my computing experience.

```sh title="How to install Asahi Linux from your macOS"
curl https://alx.sh | sh 
```

What followed was a streamlined, well thought-out, and nerdy installation process, made super easy!

Initially, Asahi Linux greeted me with the familiarity of :simple-archlinux: Arch, a distribution I knew and loved. However, it was a bittersweet experience as nothing seemed to work quite right. Speakers remained silent, the camera stayed dormant, and even the touchbar seemed to have lost its functionality (though, thankfully, I have a physical ESC key – a small victory in the grand scheme of things). Yet, despite the challenges, I found myself drawn to this new frontier, embracing the thrill of daily driving an imperfect system.

Then came the moment when the folks at Fedora unveiled their initial remix, and once again, I found myself drawn to the allure of the unknown. With a sense of anticipation, I booted up :simple-macos: and, with a few keystrokes, welcomed :simple-fedora: Fedora Wayland KDE Plasma into the fold. It was a wonderful experience, akin to breathing new life into my laptop.

But, as fate would have it, personal memory reasons led me back to my roots, stripping away the layers of KDE Plasma and returning to the simplicity of AwesomeWM. Yes, I may have insulted Emacs elsewhere on my website, but rest assured, my fingers are being contorted in all the right ways now.

I'm pleased to say that my camera, microphone and speakers all now work.

So, what are the pros and cons of my journey into the world of Asahi Linux? Let's break it down:

## Understanding Asahi Linux

Asahi Linux is an open-source project dedicated to bringing the Linux operating system to Apple Silicon devices, such as the M1 chip. It aims to provide users with the flexibility and customization options of Linux while leveraging the performance and efficiency of Apple Silicon.

## Motivation Behind Asahi Linux

The motivation behind Asahi Linux stems from Apple's transition to its custom-designed silicon, which marked a significant shift in the tech industry. While macOS offers a robust ecosystem, some users prefer the flexibility and openness of Linux. Asahi Linux bridges this gap, allowing users to choose their preferred operating system without compromising performance or compatibility.

## The Power of m1n1

Central to the success of Asahi Linux is m1n1, an open-source bootloader for Apple Silicon Macs. m1n1 provides low-level access to the hardware, enabling developers to experiment and innovate with different operating systems. Its versatility and robustness make it a crucial component in the Asahi Linux ecosystem, empowering users to unlock the full potential of their Apple Silicon devices.

## Pros

- I get to run n number of Linux natively on my :fontawesome-brands-apple: M1 laptop
- My device isn't sending click or device attachment data to Apple
- My MacBook Pro no longer sounds like a jet airplane taking off when I `make`
- KVM (qemu) on arm64 is a thing of beauty, though not without its quirks.
- I've reclaimed my hard disk space, purging unnecessary clutter and embracing the freedom of a streamlined system.

## Cons

- HDMI and the fingerprint reader remain elusive, their functionality pending some marcan love.
- USB detection and hotplug require some fine-tuning, a minor inconvenience in the grand scheme of things #turnifoffandonagain
- While AwesomeWM may be awesome, my knowledge of it leaves much to be desired. But hey, I'm learning as I go.
- The discovery of "dnf" left me momentarily bewildered, a reminder that there's always something new to learn in the world of Linux.
- I get weird screen flashes sometimes... :man_shrugging:

## Conclusion

In conclusion, my journey with :simple-asahilinux: [Asahi Linux](https://asahilinux.org/ "Asahi Linux website") has been nothing short of transformative. It's a reminder that sometimes, the greatest adventures begin with a single command – a simple `curl | sh` that sets us on a path of discovery and self-discovery.

Asahi Linux may not be perfect, but it's a testament to the power of community, innovation, and the boundless possibilities of open-source software.

And for that, I am eternally grateful.
