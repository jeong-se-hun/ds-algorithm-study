import { HashTable } from "./hashTable.mts";

class hashSet {
    hashTable: HashTable<number>;
    constructor() {
        this.hashTable = new HashTable<number>();
    }

    // 데이터 삽입
    add(data:number) {
        if (this.hashTable.get(data) === null) {
            this.hashTable.set(data, -1)
        }
    }
    // 데이터 체크
    isContain(data: number) {
        return this.hashTable.get(data) !== null
    }

    // 데이터 제거
    remove(data:number) { 
        this.hashTable.remove(data)
    }
    
    // 셋 비우기
    clear() {
          for (let i = 0; i < this.hashTable.arr.length; i++){
           this.hashTable.arr[i].clear()
        } 
    }
    
    // 셋 비었는지 체크
    isEmpty() {
        for (let i = 0; i < this.hashTable.arr.length; i++){
            if(this.hashTable.arr[i].count > 0) return false
        } 

       return true
    }
    
    // 모든 데이터 출력
    printAll() {
        for (let i = 0; i < this.hashTable.arr.length; i++){
            let currentNode = this.hashTable.arr[i].head
            while (currentNode !== null) {
                console.log(currentNode.data.key)
                currentNode = currentNode.next
            }
        } 
    }

}

export {hashSet}