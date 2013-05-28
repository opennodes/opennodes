$(document).ready(function(){
  
  $.getJSON('../mdfiles/Menu.json', function(arr){
    var html = '* [GitHub](https://github.com/peihsinsu/opennodes)\n';
    html += '* [Node.js](http://nodejs.org)\n';
    html += '* [About Me](http://about.me/peihsinsu)\n\n';

    for(var i = 0 ; i < arr.length ; i++ ) {
      var _this = arr[i];
      if(_this.type = 'folder') {
        html += '<p>'+_this.name+'<br/>';
        for(var j = 0 ; j < _this.nodes.length ; j++ ) {
          var _nodes = _this.nodes[j];
          html += '<small>['+_nodes.name+'](index.html?page='+_nodes.link+')</small>,';
        }
        html += '<br/></p>\n\n';
      }
    }
    $('#md_menu').html(html);

    $('#menu').html(htmlUnescape(marked($('#md_menu').html()), mkdOpt));  
  });

});