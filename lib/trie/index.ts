// types
import type { PokemonListItem } from "@/types/pokemon";

class TrieNode {
  public children: { [key: string]: TrieNode };
  public isEndOfWord: boolean;
  public value?: PokemonListItem;

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

export class Trie {
  public root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  public insert(
    word: string,
    value: PokemonListItem
  ): void {
    let node = this.root;
    for (const char of word.toLowerCase()) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
    node.value = value;
  }

  public search(prefix: string): PokemonListItem[] {
    let node = this.root;
    for (const char of prefix.toLowerCase()) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    const results: PokemonListItem[] = [];
    this.collectWords(node, results);
    return results;
  }

  private collectWords(
    node: TrieNode,
    results: PokemonListItem[]
  ): void {
    if (node.isEndOfWord && node.value) {
      results.push(node.value);
    }
    for (const char in node.children) {
      this.collectWords(node.children[char], results);
    }
  }
}
