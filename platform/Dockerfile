FROM amazon/aws-cli:2.11.21

RUN \
  yum install -y yum-utils && \
  yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo && \
  yum -y install terraform
 
ENTRYPOINT [ "/bin/sh" ]

