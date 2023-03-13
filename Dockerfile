# Dockerfile for building a container with the latest version of the
# OpenShift Origin client tools.

FROM centos:7

# Install the OpenShift Origin client tools
RUN yum install -y centos-release-openshift-origin && \
    yum install -y origin-clients && \
    yum clean all

# Set the default command to print the version

CMD ["oc", "version"]

# Build the image with:
# docker build -t openshift-origin-client-tools .

# Run the container with:
# docker run -it openshift-origin-client-tools

