# Use with --log-config option:
#    volttron --log-config rotatinglog.py

{
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'agent': {
            '()': 'volttron.platform.agent.utils.AgentFormatter',
        },
    },
    'handlers': {
        'syslog': {
            'class': 'logging.handlers.SysLogHandler',
            'level': 'DEBUG',
            'formatter': 'agent',
            'address': '/var/log/sock/volttron',
        },
    },
    'root': {
        'handlers': ['syslog'],
        'level': 'DEBUG',
    },
}
