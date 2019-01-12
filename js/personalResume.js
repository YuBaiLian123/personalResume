/*!
       * Create an array of word objects, each representing a word in the cloud
       */
      var word_array = [
          {text: "国际大奖", weight: 15},
          {text: "技术大牛", weight: 9, /*link: "#"可以点击链接跳转*/},
          {text: "数学很好", weight: 6, html: {title: "我数学真的很好，不信算了"}},
          {text: "沟通舒畅", weight: 7},
          {text: "论文多", weight: 5},
          {text: "活泼", weight: 5},
          {text: "已婚", weight: 5},
          {text: "生命科学", weight: 5},
          {text: "学霸", weight: 5},
          {text: "Java", weight: 5},
          {text: "北京", weight: 5},
          {text: "100万年薪", weight: 5},
          // ...as many words as you want
      ];
 
      $(function() {
        // When DOM is ready, select the container element and call the jQCloud method, passing the array of words as the first argument.
        $("#myCloud").jQCloud(word_array);
      });