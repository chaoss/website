# GrimoireLab

GrimoireLab is a set of free, open source software tools for software development analytics. They gather data from several platforms involved in software development (Git, GitHub, Jira, Bugzilla, Gerrit, Mailing lists, Jenkins, Slack, Discourse, Confluence, StackOverflow, [and more](https://chaoss.github.io/grimoirelab/)), merge and organize it in a database, and produce visualizations, actionable dashboards, and analytics of all of it.  

GrimoireLab is focused on analyzing activity, community, and processes. Nonetheless, it can be easily tailored for other aims, and integrated with other tools.

## Built with GrimoireLab

Projects and services built using GrimoireLab technology:

1. [Cauldron.io](https://cauldron.io/): A SaaS solution that allows project managers, analysts, and developers to understand more about the community and processes involved in software development. 
2. [TLF Community Bridge Insights](https://lfanalytics.io/projects): A centralized platform that collects and visualizes data to let you monitor and analyze your open source projects.
3. [Mautic Community Dashboard](https://dashboard.mautic.org/): The Community Dashboard uses the open-source GrimoireLab tool to import, analyze and visualize data from multiple sources in one central location.
4. [The Document Foundation Dashboard](https://dashboard.documentfoundation.org/): TDF dashboard uses GrimoireLab tool in order to show a transparent overview of LibreOffice development.
5. [Bitergia Analytics Platform](https://bitergia.com/bitergia-analytics/): A centralized source for metrics and data about software development projects.

## Main components

GrimoireLab tookit is organized in twelve different components. Each of them can be used as independent tools:

**Data retrieval:**

* [Perceval](https://github.com/chaoss/grimoirelab-perceval): Tool used to retrieve and gather data from software repositories.
* [Graal](https://github.com/chaoss/grimoirelab-graal): Source data analysis with external tools
* [KingArthur](https://github.com/chaoss/grimoirelab-kingarthur): batch processing for massive retrieval

**Data enrichment:**

* [GrimoireElk](https://github.com/chaoss/grimoirelab-elk): storage and enrichment of data
* [SortingHat](https://github.com/chaoss/grimoirelab-sortinghat): identity management

**Data visualization:** 

* [Kibiter](https://github.com/chaoss/grimoirelab-kibiter): dashboard, downstream version of Kibana
* [Sigils](https://github.com/chaoss/grimoirelab-sigils): visualizations and dashboards
* [Manuscripts](https://github.com/chaoss/grimoirelab-manuscripts): reporting

**Platform management, orchestration, and common utils:**

* [Mordred](https://github.com/chaoss/grimoirelab-mordred): orchestration
* [GrimoireLab Toolkit](https://github.com/chaoss/grimoirelab-toolkit): common utilities
* [Bestiary](https://github.com/chaoss/grimoirelab-bestiary): web-based user interface to manage repositories and projects for Mordred
* [Hatstall](https://github.com/chaoss/grimoirelab-hatstall): web-based user interface to manage SortingHat identities

## GrimoireLab Tutorial

**START HERE:** https://chaoss.github.io/grimoirelab-tutorial

## Contributing to GrimoireLab

Welcome contributors! We truly ♥ free, libre, open source software as much as you do. If you are considering to contribute to GrimoireLab, there are two important things you should know:

1. **Documentation:** You can start by reading the [CONTRIBUTING.md](https://github.com/chaoss/grimoirelab/blob/master/CONTRIBUTING.md) file available at GrimoireLab’s GitHub repository.
2. **Communication channels:** GrimoireLab uses a [mailing list](https://lists.linuxfoundation.org/mailman/listinfo/grimoirelab-discussions), [IRC](http://webchat.freenode.net/?channels=GrimoireLab), and [Issues](https://github.com/chaoss/grimoirelab/issues) as the main communication channels. 

**More Information:**

GrimoireLab Website → https://chaoss.github.io/grimoirelab/

GrimoireLab Code → https://github.com/chaoss/grimoirelab (see [README.md](https://github.com/chaoss/grimoirelab/blob/master/README.md) for links to all repos)

CHAOSS Community GrimoireLab dashboard → http://chaoss.biterg.io
