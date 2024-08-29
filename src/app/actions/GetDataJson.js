'use server'

import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), './data/data.json');

// JSONデータを取得する
export async function getData() {
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}