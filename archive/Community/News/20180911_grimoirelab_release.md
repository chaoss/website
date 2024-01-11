# New GrimoireLab release: 18.09-02

We have a new release of GrimoireLab, 18.09-02, corresponding to
`grimoirelab-0.1.2` (the main Python package). 

This release includes full support Mattermost and GoogleHits, some
improvements in the Kibiter UI and panels, some bug fixes and minor new
features.

The corresponding packages have been uploaded to pypi (so they're
installable with pip). I've tested most of the examples in the
[GrimoireLab Tutorial](https://chaoss.github.io/grimoirelab-tutorial)
with this new release, and everything seems to
work. Please, report any problem you may find.

As usual, this release of pypi packages was generated with docker
containers, to ensure platform independence. You can install all the
packages just with:

```
$ pip install grimoirelab
```

Remember that now we also have a new grimoirelab package, that pulls
all the Python packages for the release. So, installation is easier,
and traceability too: for knowing the GrimoireLab release, just run

```
$ grimoirelab -v
GrimoireLab 0.1.2
```

The tag you get (`0.1.2` in this case) corresponds to a certain release
file (`18.09-02` in this case), and specific commits and Python package
versions.

We have also produced four Docker images available in DockerHub, all of
them with the tags `:18.09-02` and `:latest`. You can pull and run them
straight away:

* grimoirelab/factory: for creating the Python packages

* grimoirelab/installed: with GrimoireLab installed

* grimoirelab/full: grimoirelab/installed plus services needed to
produce a dashboard, by default produces a dashboard of the CHAOSS
project.

* grimoirelab/secured: grimoirelab/full plus access control and SSL for
access to Kibiter

If you want to use or help to debug the containers, have a look at
the [docker directory in the chaoss/grimoirelab repository](https://github.com/chaoss/grimoirelab/tree/master/docker).

The list of new stuff is in the [NEWS file](https://github.com/chaoss/grimoirelab/blob/master/releases/NEWS)
(check all changes since
18.08-01, which was the latest release with packages in pypi).

