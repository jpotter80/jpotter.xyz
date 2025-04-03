---
theme: [deep-space, wide]
title: Quick Reference
toc: true,
---

<body>

# Docker CLI Quick Reference Guide

---

## General Commands

| Command | Description |
|---------|-------------|
| `docker -d` | Start the docker daemon |
| `docker --help` | Get help with Docker (can also use `--help` on all subcommands) |
| `docker info` | Display system-wide information |

---

## Images

| Command | Description |
|---------|-------------|
| `docker build -t <image_name> .` | Build an image from a Dockerfile |
| `docker build -t <image_name> . --no-cache` | Build an image without using cache |
| `docker images` | List local images |
| `docker rmi <image_name>` | Delete an image |
| `docker image prune` | Remove all unused images |

---

## Docker Hub

| Command | Description |
|---------|-------------|
| `docker login -u <username>` | Login to Docker Hub |
| `docker push <username>/<image_name>` | Publish an image to Docker Hub |
| `docker search <image_name>` | Search Hub for an image |
| `docker pull <image_name>` | Pull an image from Docker Hub |

---

## Containers

| Command | Description |
|---------|-------------|
| `docker run --name <container_name> <image_name>` | Create and run a container with a custom name |
| `docker run -p <host_port>:<container_port> <image_name>` | Run a container and publish port(s) to the host |
| `docker run -d <image_name>` | Run a container in the background |
| `docker start\|stop <container_name>` | Start or stop an existing container |
| `docker rm <container_name>` | Remove a stopped container |
| `docker exec -it <container_name> sh` | Open a shell inside a running container |
| `docker logs -f <container_name>` | Fetch and follow the logs of a container |
| `docker inspect <container_name>` | Inspect a running container |
| `docker ps` | List currently running containers |
| `docker ps --all` | List all containers (running and stopped) |
| `docker container stats` | View resource usage stats |

---

## Overview

Docker provides the ability to package and run applications in isolated environments called containers. Containers are lightweight, include everything needed to run the application, and ensure consistent behavior across different environments.

**Key Concepts:**
- **Images**: Executable packages containing all dependencies and configuration
- **Containers**: Runtime instances of Docker images
- **Docker Hub**: Registry service for finding and sharing container images

### Installation

Docker Desktop is available for Mac, Linux, and Windows at https://docs.docker.com/desktop

For more information:
- Documentation: https://docs.docker.com
- Example projects: https://github.com/docker/awesome-compose

---

</body>

<style>

a[href] {
  color: #7fc8b6;
}

</style>