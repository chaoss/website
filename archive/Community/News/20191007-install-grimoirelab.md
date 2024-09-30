# Simplifying how to install GrimoireLab

By [Georg Link](https://www.linkedin.com/in/georglink)

When I talk to people who tried to install GrimoireLab, I get one consistent answer. It is difficult and our [GrimoireLab tutorial](https://chaoss.github.io/grimoirelab-tutorial/) is too complicated. I believe this status quo is hurting the adoption of GrimoireLab software and CHAOSS metrics. This blog post is about how to make it easier for anyone to start using GrimoireLab. 

On a side note, I know that the Augur maintainers are working to make it easier to install Augur as well. Hopefully, CHAOSS will have easy to use software tools that accompany its metrics.

Back to GrimoireLab. When [I joined Bitergia](https://blog.bitergia.com/2019/08/29/georg-a-new-bitergian-joins-the-nest/), the company that invented and maintains GrimoireLab, I suggested a [dogfooding session](https://blog.bitergia.com/2019/10/10/dogfooding-grimoirelab/). The idea was to let the engineers who work on GrimoireLab every day sit back and coach other Bitergians through the installation process. The dogfooding session was fun and insightful.

One insight was that the GrimoireLab tutorial is NOT the easiest way to get GrimoireLab up and running. It was easier to use a docker-compose solution that was piloted within Bitergia. I want to share how this works because it will be the foundation for an [improved GrimoireLab tutorial](https://github.com/chaoss/grimoirelab-tutorial/issues/91).

This blog post is to share my experience and give a hands-on, easy to follow guide. Although I am using a MacBook Air for writing this blog post and confirming the steps work, it is very similar on Ubuntu or DigitalOcean. 

**A BIG THANK YOU to several CHAOSS members who have walked through the following procedure and confirmed their correct working!**

Grab a fresh cup of coffee and settle in for the ride. Based on the feedback I got, it takes about 10 minutes to follow the steps but a bit longer to wait for some steps to finish executing.

## How-to install GrimoireLab on a Mac

Let’s start with the prerequisites. First, we need to have [git](https://git-scm.com/) installed. I will not go into details for git, because it is a standard tool with much [documentation on the internet](https://www.google.com/search?q=how+to+install+git). Second, we need [Docker Desktop for Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac). It will also install Docker Compose. After [starting Docker Desktop for Mac](https://docs.docker.com/docker-for-mac/install/), we can confirm in the command line that everything is up and running.

```
$ git --version
$ docker --version
$ docker-compose --version
$ docker-machine --version
```


![1. Screenshot of checking prerequisites](https://github.com/chaoss/website/blob/main/archive/Community/News/images/20191007-install-grimoirelab/1-Screenshot-of-checking-prerequisites.png)

I found that by default, Docker is not assigned enough resources. Click on the Docker symbol in the top bar of and open Preferences. In the Advanced settings, make sure Docker has enough resources. I found 3 CPUs, 8GB Memory, and 2GB Swap to work for me.


![2. Screenshot of Docker configuration.png](https://github.com/chaoss/website/blob/main/archive/Community/News/images/20191007-install-grimoirelab/2-Screenshot-Docker-configuration.png)

Next, we need the docker-compose file and some setting files. They are currently in the [CHAOSS GrimoireLab repository](https://github.com/chaoss/grimoirelab). We need to clone the repository to our local machine. I have my own way of organizing repositories that I clone, but it really does not matter where you store it. The important command to run now are for cloning the repository:

```
$ git clone https://github.com/chaoss/grimoirelab
$ cd grimoirelab
```


![3. Screenshot of cloning analytics-demo](https://github.com/chaoss/website/blob/main/archive/Community/News/images/20191007-install-grimoirelab/3-Screenshot-of-cloning-analytics-demo.png)


GrimoireLab comes with default settings that we want to review. Change directory into `grimoirelab/default-grimoirelab-settings`. The [projects.json](https://github.com/chaoss/grimoirelab/blob/master/default-grimoirelab-settings/projects.json) is configured to collect metrics about the GrimoireLab git repository. Maybe take a look at the relevant [GrimoireLab tutorial section on the projects file](https://chaoss.github.io/grimoirelab-tutorial/sirmordred/projects.html) for details on how the file is built. 

With the current settings, we would analyze only the git commit history. I am also interested in analyzing issues and pull requests. For this, edit the projects.json and add:

```
        "github": [
            "https://github.com/chaoss/grimoirelab"
        ]
```

![projects.json with the added lines](https://github.com/chaoss/website/blob/main/archive/Community/News/images/20191007-install-grimoirelab/4-Screenshot-of-projects.json.png)

**Pro-tip:** After editing the projects.json file, send it through a JSON validator (e.g., [JSONLint](https://jsonlint.com/), or [FreeFormatter](https://www.freeformatter.com/json-validator.html)) to check for syntax errors. 

Next, we need to make sure that we have API access tokens set up correctly in the [setup.cfg](https://github.com/chaoss/grimoirelab/blob/master/default-grimoirelab-settings/setup.cfg) file. The projects.json specifies only `git` as data sources. To activate data collection for GitHub issues and pull requests, we have to un-comment the relevant section. For this, [GitHub requires an API token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line#creating-a-token), which can be generated in your [GitHub settings > Developer settings > Personal access tokens](https://github.com/settings/tokens). We can generate the API token without selecting a scope (i.e., do not check any boxes).


![5. Screenshot for GitHub API YOUR_API_TOKEN_HERE](https://github.com/chaoss/website/blob/main/archive/Community/News/images/20191007-install-grimoirelab/5-Screenshot-for-GitHub-API-token.png)

Now, we have configured GrimoireLab to begin collecting data. We configured what projects to collect data for the [projects.json](https://github.com/chaoss/grimoirelab/blob/master/default-grimoirelab-settings/projects.json) and configured our access to the relevant data sources in the [setup.cfg](https://github.com/chaoss/grimoirelab/blob/master/default-grimoirelab-settings/setup.cfg).

Next, we can begin downloading and starting the containers. First, we need to switch to the `docker-compose` directory. If you like, you can review the [docker-compose.yml](https://github.com/chaoss/grimoirelab/blob/master/docker-compose/docker-compose.yml) file to see what is going to happen. There are no changes needed here. Now, to start making magic happen (pun intended), let’s run:

```
$ cd ../docker-compose
$ docker-compose up -d
```

The first time we run this command, several downloads are started. Grab a coffee refill while we wait for the “done” signal.


![7. Screenshot of done signal](https://github.com/chaoss/website/blob/main/archive/Community/News/images/20191007-install-grimoirelab/7-Screenshot-of-done-signal.png)


If you get an error, try running `docker-compose up` without the `-d` flag. That will output all messages and give some insights to problems. For example, if an error reads something like “Error starting proxy: listen tcp 0.0.0.0:3306: bind: address already in use”, then you already have a program listening on a port, in this case port 3306 which would be the case if you are running an [AMP](https://en.wikipedia.org/wiki/List_of_Apache%E2%80%93MySQL%E2%80%93PHP_packages) with MySQL. In the scope of this blog post, I can only point out that this could be an issue but I have to assume that you can work through it yourself.

Once your containers are all started successfully, go to your favorite browser and look at the status by going to http://localhost:5601 


![8. Screenshot of status page with error](https://github.com/chaoss/website/blob/main/archive/Community/News/images/20191007-install-grimoirelab/8-Screenshot-of-status-page-with-error.png)

Let me guess, the Elasticsearch container is not running. This is a known problem, and a [solution is documented in the elastic documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html#docker-cli-run-prod-mode). To resolve the issue, run on your Mac ([read the doc for other operating systems](https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html#docker-cli-run-prod-mode)):

```
$ screen ~/Library/Containers/com.docker.docker/Data/vms/0/tty
(then run:)
 sysctl -w vm.max_map_count=262144
```

To get back, use the key combination `Ctrl-a` + `Ctrl-d`

Let’s restart the containers. The elasticsearch container should be the only one with a green “done” signal. The other containers should be “up-to-date.

```
$ docker-compose up -d
```

My MacBook Air started working. The fan kicked on. My system slowed down a bit. (I know, it’s a bit dramatic.) After several minutes, I refreshed the localhost:5601 page and started to see data.

Did you follow all steps and it works? Congratulations!

Does it not work? Maybe we can help you over on the freenode.net [#CHAOSS-community](https://webchat.freenode.net/?channel=#CHAOSS-community) IRC channel. Or post an [issue on GitHub](https://github.com/chaoss/grimoirelab/issues).

## Next steps 

There are several things to do as a user of GrimoireLab. For example, explore the data, expand the list of projects to collect data for, or think about a more permanent installation than on a personal laptop. If you want to include other data sources, simply edit the setup.cfg file and restart docker. Please note, that the analytics-demo is intended for a demo and not long-term production deployment of GrimoireLab.

Next steps for the CHAOSS project include updating our [GrimoireLab tutorial](https://chaoss.github.io/grimoirelab-tutorial/). One challenge to overcome is that everyone’s local environment will be different and resources limited, leading to errors that are difficult to track down or resolve. For this, I recommend focusing the tutorial on deployments in the cloud, for example on Digital Ocean. Ansible and Terraform might be tools to automate many of the steps described above. Everyone will thus have the same conditions when installing GrimoireLab.

Getting community metrics through GrimoireLab can feel like drinking from a firehose. I recommend you [review the CHAOSS metrics](https://chaoss.community/metrics/) and [join our regular calls](https://chaoss.github.io/grimoirelab-tutorial/) to get your bearings on what metrics are relevant and to discuss your specific needs with other CHAOSS members.

Don’t want to operate the metrics platform yourself and prefer a hosted solution? Need expert guidance through developing your metrics strategy? [Send me an email](mailto:georglink@bitergia.com) and we can discuss whether Bitergia’s services are a good match for your needs.

**[Update 11/8]**: Changed the blog post to use the new docker-compose solution that is now part of GrimoireLab.
