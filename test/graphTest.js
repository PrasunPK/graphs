var Graph = require('../graph.js');
var chai = require('chai');
var assert = chai.assert;
describe('Directed Graph',function(){
  describe('hasEdgeBetween',function(){
    it('adds one vertex and forms a self loop',function(){
      var g = new Graph();
      g.addVertex('a');
      g.addEdge('a','a');
      assert.ok(g.hasEdgeBetween('a','a'));
    });

    it('adds two vertices and forms an edge between them',function(){
      var g = new Graph();
      g.addVertex('a');
      g.addVertex('b');
      g.addEdge('a','b');
      assert.ok(g.hasEdgeBetween('a','b'));
    });

    it('adds two vertices and forms an edge between them if there are multiple vertices',function(){
      var g = new Graph();
      g.addVertex('a');
      g.addVertex('b');
      g.addVertex('c');
      g.addEdge('a','b');
      g.addEdge('b','c');
      assert.ok(g.hasEdgeBetween('a','b'));
      assert.ok(g.hasEdgeBetween('b','c'));
      assert.notOk(g.hasEdgeBetween('a','c'));
    });
  });
  
  describe('hasPathBetween',function(){
    it('checks if two vertices has path between them or not',function(){
      var g = new Graph();
      g.addVertex('a');
      g.addVertex('b');
      g.addVertex('c');

      assert.deepEqual(g.hasPathBetween('a','a'), ['a','a']);

      g.addEdge('a','b');
      g.addEdge('b','c');

      assert.deepEqual(g.hasPathBetween('a','b'), ['a','b']);
      assert.deepEqual(g.hasPathBetween('a','c'), ['a','b','c']);

    });
  });
});
