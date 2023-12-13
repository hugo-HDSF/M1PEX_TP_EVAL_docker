# EVAL DOCKER

## Description

evaluation docker et ansible M1PEX

## Getting Started

---

## EXERCICE 1
### Installing

```Shell
make build
```

or

```Shell
make build -d
```

---

## EXERCICE 2
### Deployement using ansible

copy `deploy_M1PEX.yml` and `hosts.ini` to your ansible server.

servers addresses are located in `hosts.ini`

```ìni
[servers]
mon_serveur ansible_host=192.168.64
```
run command

```Shell
ansible-playbook -i hosts.ini -u user -k -K deploy_M1PEX.yml
```

project will be deployed in `/var/www/html/M1PEX_TP_EVAL_docker`

> **Warning** : **sshpass** is required to run this command.
> *(make sur to add `user` to `sudoers` file.)*