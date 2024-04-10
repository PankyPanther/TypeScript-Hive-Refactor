export class HashTable {
    table = new Array(3333);
    numItems = 0;

    hasher(inputValue: string | number, tableSize: number): number {
        let hash = 17;
  
        if (typeof inputValue === 'string'){
            for (let i = 0; i < inputValue.length; i++) {
                hash = (13 * hash * inputValue.charCodeAt(i)) % tableSize;
            }
        } else{
            hash = (13 * inputValue) % tableSize
        }
      
        return hash;
    }

    resize(): void {
        const newTable = new Array(this.table.length * 2);
        this.table.forEach(item => {
          if (item) {
            item.forEach(([key, value]: [string | number, any]) => {
              const idx = this.hasher(key, newTable.length);
              if (newTable[idx]) {
                newTable[idx].push([key, value]);
              } else {
                newTable[idx] = [[key, value]];
              }
            });
          }
        });
        this.table = newTable;
    }
  
    setItem(key: string | number, value: any): void{
        this.numItems++;
        const loadFactor = this.numItems / this.table.length;
        
        if (loadFactor > 0.8) {
            this.resize();
        }
    
        const idx = this.hasher(key, this.table.length);
        if (this.table[idx]) {
            this.table[idx].push([key, value]);
        } else {
            this.table[idx] = [[key, value]];
        }
    };
  
    getItem(key: string | number){
      const idx = this.hasher(key, this.table.length);
  
      if (!this.table[idx]) {
        return null;
      }

      return this.table[idx].find((x: (string | number)[]) => x[0] === key)[1];
    };
  }
  