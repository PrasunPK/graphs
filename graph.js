var Graph = function(){
    this.graph = {};
}

Graph.prototype = {
  addVertex : function(vertex){
      this.graph[vertex] = [];
  },

  addEdge : function(from,to){
      this.graph[from].push(to);
  },

  hasEdgeBetween : function(from, to){
      return this.graph[from] == to;
  },

  hasPathBetween : function(from,to,path){
    path = path || [from];
    if(from == to)
        return path.concat(to);
    if(this.hasEdgeBetween(from,to))
        return path.concat(to);

    for (var adjacent in this.graph[from]){
        var vertex = this.graph[from][adjacent];
        if(this.hasEdgeBetween(vertex,to)){
            path.push(vertex);
        }
        return this.hasPathBetween(this.graph[vertex][adjacent],to,path);
    }
    return path;
  }

};
module.exports = Graph;
