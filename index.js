var hookhubDoc = function (docType, docTopic) {
  let newDoc = {
    type: docType,
    topic: docTopic,
    source: {
      name: '',
      link: '',
      img: ''
    },
    messages: [],
    setType: function (docType) {
      this.type = docType
    },

    setTopic: function (docTopic) {
      this.topic = docTopic
    },

    setAuthor: function (docSourceName, docSourceLink, docSourceImg) {
      this.source.name = docSourceName
      if (docSourceLink !== null) this.source.link = docSourceLink
      if (docSourceImg !== null) this.source.Img = docSourceImg
    },

    addMessage: function (id, message, timestamp, url) {
      this.messages.push = {
        id: id,
        message: message,
        timestamp: timestamp,
        url: url
      }
    }

  }
  return newDoc
}

module.exports = hookhubDoc
