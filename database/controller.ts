import { promises as fs } from "fs";

const fileName = "./db.json";

interface BaseItem {
  id: string | number;
  [key: string]: any; // Allow any other properties
}

interface Database<T extends BaseItem> {
  items: T[];
  deletedItems: T[];
}

interface Output {
  success: boolean;
  message: string;
  payload?: any;
}

class DatabaseController<T extends BaseItem> {
  private path: string;

  constructor(path: string = fileName) {
    this.path = path;
  }

  private outputMaker(success: boolean, message: string, payload?: any): Output {
    return { success, message, payload };
  }

  public async readDB(): Promise<Database<T>> {
    const rawDatabase = await fs.readFile(this.path, "utf-8");
    return JSON.parse(rawDatabase) as Database<T>;
  }

  private async findDuplicate(array: T[], id: string | number): Promise<Output> {
    const exists = array.some((each) => each.id.toString() === id.toString());
    return exists
      ? this.outputMaker(true, "Duplicate item detected based on id")
      : this.outputMaker(false, "No duplicate item detected based on id", id);
  }

  public async addItem(item: T): Promise<Output> {
    const database = await this.readDB();
    const result = await this.findDuplicate(database.items, item.id);
    if (!result.success) {
      database.items.push(item);
      try {
        await fs.writeFile(this.path, JSON.stringify(database));
        return this.outputMaker(true, "Item has been added");
      } catch (e) {
        return this.outputMaker(false, "Can't write to the database", e);
      }
    } else {
      return this.outputMaker(false, `ID ${item.id} already exists`);
    }
  }

  public async deleteItem(id: string | number): Promise<Output> {
    const database = await this.readDB();
    const result = await this.findDuplicate(database.items, id);
    if (result.success) {
      try {
        database.deletedItems.push(...database.items.filter((each) => each.id === id));
        database.items = database.items.filter((each) => each.id !== id);
        await fs.writeFile(this.path, JSON.stringify(database));
        return this.outputMaker(true, "Item successfully deleted");
      } catch (e) {
        return this.outputMaker(false, "Can't write to the database", e);
      }
    } else {
      return this.outputMaker(false, `ID ${id} doesn't exist`);
    }
  }

  public async updateItem(item: T): Promise<Output> {
    const database = await this.readDB();
    const result = await this.findDuplicate(database.items, item.id);
    if (result.success) {
      database.items = database.items.map((each) => (each.id === item.id ? { ...each, ...item } : each));
      try {
        await fs.writeFile(this.path, JSON.stringify(database));
        return this.outputMaker(true, "Item has been updated");
      } catch (e) {
        return this.outputMaker(false, "Can't write to the database", e);
      }
    } else {
      return this.outputMaker(false, `ID ${item.id} doesn't exist`);
    }
  }

  public async getItem(id: string | number): Promise<Output> {
    const database = await this.readDB();
    const item = database.items.find((each) => each.id === id);
    return item
      ? this.outputMaker(true, "Item found", item)
      : this.outputMaker(false, `ID ${id} doesn't exist`);
  }

  public async getDeletedItem(id: string | number): Promise<Output> {
    const database = await this.readDB();
    const item = database.deletedItems.find((each) => each.id === id);
    return item
      ? this.outputMaker(true, "Deleted item found", item)
      : this.outputMaker(false, `ID ${id} doesn't exist in deleted items`);
  }

  public async deleteDeletedItem(id: string | number): Promise<Output> {
    const database = await this.readDB();
    const exists = database.deletedItems.some((each) => each.id === id);
    if (exists) {
      try {
        database.deletedItems = database.deletedItems.filter((each) => each.id !== id);
        await fs.writeFile(this.path, JSON.stringify(database));
        return this.outputMaker(true, "Deleted item permanently removed");
      } catch (e) {
        return this.outputMaker(false, "Can't write to the database", e);
      }
    } else {
      return this.outputMaker(false, `ID ${id} doesn't exist in deleted items`);
    }
  }

  public async recoverDeletedItem(id: string | number): Promise<Output> {
    const database = await this.readDB();
    const item = database.deletedItems.find((each) => each.id === id);
    if (item) {
      try {
        database.deletedItems = database.deletedItems.filter((each) => each.id !== id);
        database.items.push(item);
        await fs.writeFile(this.path, JSON.stringify(database));
        return this.outputMaker(true, "Item successfully recovered");
      } catch (e) {
        return this.outputMaker(false, "Can't write to the database", e);
      }
    } else {
      return this.outputMaker(false, `ID ${id} doesn't exist in deleted items`);
    }
  }
}

export default DatabaseController;
