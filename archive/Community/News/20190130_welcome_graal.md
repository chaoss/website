# Welcome Graal

Currently, [GrimoireLab](https://github.com/chaoss/grimoirelab) allows to produce analytics with data extracted from more than 30 tools related with contributing to Open Source development such as version control systems, issue trackers and forums. Despite the large set of metrics available in GrimoireLab, none of them relies on information extracted from source code, thus limiting the end-users to benefit of a wider spectrum of software development data.

[Graal](https://github.com/chaoss/grimoirelab-graal) is a tool that allows to conduct customizable and incremental analysis of source code by leveraging on existing tools. It enhances [Perceval](https://github.com/chaoss/grimoirelab-perceval) (one of the key GrimoireLab‘s components) and produces an output similar to Perceval one to ease the integration with GrimoireLab, thus complementing the analytics offered by latter with source Code related metrics.

Once installed, Graal can be used as a stand-alone program or Python library.

## Backends

Several backends have been already developed. They leverage on some source code analysis tools, where executions are triggered via system calls or their Python interfaces.

In the current status, the backends mostly target Python code, however other backends can be easily developed to cover other programming languages.

The available backends are:

- **CoCom** gathers data about code complexity (e.g., cyclomatic complexity, LOC) from projects written in popular programming languages such as: C/C++, Java,
Scala, JavaScript, Ruby and Python. It leverages on [Cloc](http://cloc.sourceforge.net/) and [Lizard](https://github.com/terryyin/lizard); the former is a Linux package used to count blank lines, comment lines and LOC, while the latter is a code complexity analyzer written in Python.

- **CoDep** extracts package and class dependencies of a Python module and serialized them as JSON structures, composed of edges and nodes, thus easing the bridging with front-end technologies for graph visualizations. It combines [PyReverse](https://www.logilab.org/project/pyreverse), a reverse engineering tool able to generate UML-like diagrams, plus [NetworkX](https://networkx.github.io/), a library to create, manipulate and study complex networks.

- **CoQua** retrieves code quality insights, such as checks about line-code’s length, well-formed variable names, unused imported modules and code clones. It uses [PyLint](https://www.pylint.org/), a code, bug and quality checker for Python.

- **CoVuln** scans the code to identify security vulnerabilities such as potential SQL and Shell injections, hard-coded passwords and weak cryptographic key size. It relies on [Bandit](https://pypi.org/project/bandit/), a tool designed to find common security issues in Python code.

- **CoLic** scans the code to extract license information. It currently supports [Nomos](https://github.com/fossology/fossology/tree/master/src/nomos) and [ScanCode](https://github.com/nexB/scancode-toolkit).

## Further reading

More details about how Graal works can be found at:
- [Graal: The Quest for Source Code Knowledge. SCAM 2018: 123-128, V. Cosentino, S. Dueñas, A. Zerouali, G. Robles, J.M. González-Barahona](https://www.researchgate.net/publication/326942711_Graal_The_Quest_for_Source_Code_Knowledge)
- [Bitergia blog](https://blog.bitergia.com/2018/07/24/graal-the-quest-for-source-code-knowledge/)
- [GitHub repo](https://github.com/chaoss/grimoirelab-graal)

