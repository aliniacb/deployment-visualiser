const mock = [
  [
    {
      'name': 'scheme-message-api',
      'fullName': 'theremin-scheme-message-api',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-scheme-message-api',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'core'
    },
    {
      'name': 'certificate-api',
      'fullName': 'theremin-certificate-api',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-certificate-api',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'core'
    },
    {
      'name': 'auditapi',
      'fullName': 'theremin-auditapi',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-auditapi',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'core'
    },
    {
      'name': 'securityapi',
      'fullName': 'theremin-securityapi',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-securityapi',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'core'
    },
    {
      'name': 'calendar-api',
      'fullName': 'theremin-calendar-api',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-calendar-api',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'core'
    },
    {
      'name': 'subscriptionapi',
      'fullName': 'theremin-subscriptionapi',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-subscriptionapi',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'core'
    },
    {
      'name': 'billing-api',
      'fullName': 'theremin-billing-api',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-billing-api',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'core'
    }
  ],
  [
    {
      'name': 'vocalink-report-gateway',
      'fullName': 'theremin-vocalink-report-gateway',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-vocalink-report-gateway',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'uk'
    },
    {
      'name': 'fake-barclays-filegateway',
      'fullName': 'theremin-fake-barclays-filegateway',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-fake-barclays-filegateway',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'uk'
    },
    {
      'name': 'starlinggateway',
      'fullName': 'theremin-starlinggateway',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-starlinggateway',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'indirect'
    },
    {
      'name': 'report-api',
      'fullName': 'theremin-report-api',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-report-api',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'uk'
    },
    {
      'name': 'payportinterface',
      'fullName': 'theremin-payportinterface',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-payportinterface',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'uk'
    },
    {
      'name': 'bacs-gateway',
      'fullName': 'theremin-bacs-gateway',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-bacs-gateway',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'uk'
    },
    {
      'name': 'paymentapi',
      'fullName': 'theremin-paymentapi',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-paymentapi',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'uk'
    },
    {
      'name': 'account-validation-api',
      'fullName': 'theremin-account-validation-api',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-account-validation-api',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'uk'
    }
  ],
  [
    {
      'name': 'addressbook-api',
      'fullName': 'theremin-addressbook-api',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-addressbook-api',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'euro'
    },
    {
      'name': 'claim-api',
      'fullName': 'theremin-claim-api',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-claim-api',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'euro'
    },
    {
      'name': 'sepainstant-gateway',
      'fullName': 'theremin-sepainstant-gateway',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-sepainstant-gateway',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'euro'
    },
    {
      'name': 'fake-gocardless',
      'fullName': 'theremin-fake-gocardless',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-fake-gocardless',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'euro'
    },
    {
      'name': 'gocardless-gateway',
      'fullName': 'theremin-gocardless-gateway',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-gocardless-gateway',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'euro'
    },
    {
      'name': 'sepasct-gateway',
      'fullName': 'theremin-sepasct-gateway',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-sepasct-gateway',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'euro'
    },
    {
      'name': 'directdebit-api',
      'fullName': 'theremin-directdebit-api',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-directdebit-api',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'euro'
    },
    {
      'name': 'sepa-reconciliation',
      'fullName': 'theremin-sepa-reconciliation',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-sepa-reconciliation',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'euro'
    },
    {
      'name': 'mandate-api',
      'fullName': 'theremin-mandate-api',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-mandate-api',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'euro'
    }
  ],
  [
    {
      'name': 'starlinggateway',
      'fullName': 'theremin-starlinggateway',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-starlinggateway',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'indirect'
    }
  ],
  [
    {
      'name': 'services-zipkin-svc',
      'fullName': 'theremin-services-zipkin-svc',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-services-zipkin-svc',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'platform'
    },
    {
      'name': 'acme-service',
      'fullName': 'theremin-acme-service',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-acme-service',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'platform'
    },
    {
      'name': 'services-fluentd-svc',
      'fullName': 'theremin-services-fluentd-svc',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-services-fluentd-svc',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'platform'
    },
    {
      'name': 'cadvisor',
      'fullName': 'theremin-cadvisor',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-cadvisor',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'platform'
    },
    {
      'name': 'grafana',
      'fullName': 'theremin-grafana',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-grafana',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'platform'
    },
    {
      'name': 'alertmanager',
      'fullName': 'theremin-alertmanager',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-alertmanager',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'platform'
    },
    {
      'name': 'services-consul-registrator-svc',
      'fullName': 'theremin-services-consul-registrator-svc',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-services-consul-registrator-svc',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'platform'
    },
    {
      'name': 'prometheus',
      'fullName': 'theremin-prometheus',
      'serviceArn': 'arn:aws:ecs:eu-west-1:288840537196:service/theremin-prometheus',
      'deploymentInProgress': false,
      'numDeployments': 1,
      'team': 'platform'
    }
  ]
]

export default mock
