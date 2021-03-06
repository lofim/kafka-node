module.exports = {
  BrokerNotAvailableError: require('./BrokerNotAvailableError'),
  TopicsNotExistError: require('./TopicsNotExistError'),
  FailedToRegisterConsumerError: require('./FailedToRegisterConsumerError'),
  InvalidConsumerOffsetError: require('./InvalidConsumerOffsetError'),
  FailedToRebalanceConsumerError: require('./FailedToRebalanceConsumerError'),
  InvalidConfigError: require('./InvalidConfigError'),
  SocketHasClosedError: require('./SocketHasClosedError'),
  ConsumerGroupErrors: [
    require('./GroupCoordinatorNotAvailableError'),
    require('./GroupLoadInProgressError'),
    require('./HeartbeatTimeoutError'),
    require('./IllegalGenerationError'),
    require('./NotCoordinatorForGroupError'),
    require('./RebalanceInProgressError'),
    require('./UnknownMemberIdError')
  ]
};
