// ２次元の座標を示すxとyをメンバーに持つクラスPoint2を定義してください。 コンストラクタの引数はxとyです。

class Point2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// クラスPoint2のインスタンスp1を生成してください。xとyの値は任意です。

{
  const p1 = new Point2(1, 2);
  console.assert(p1.x === 1);
  console.assert(p1.y === 2);
}

// クラスPoint2のインスタンスp2を生成してください。xとyの値は任意です。

{
  const p2 = new Point2(3, 4);
  console.assert(p2.x === 3);
  console.assert(p2.y === 4);
}

// p1とp2のxの和とyの和を持つPoint2のインスタンスp3を生成してください。

{
  const p3 = new Point2(p1.x + p2.x, p1.y + p2.y);
  console.assert(p3.x === 4);
  console.assert(p3.y === 6);
}

// クラスPoint2にメソッドaddを追加してください。 p1.add(p2)はp1とp2のxの和とyの和を持つPoint2のインスタンスを返すメソッドです。

class Point2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(p2) {
    return new Point2(this.x + p2.x, this.y + p2.y);
  }
}
{
  const p1 = new Point2(1, 2);
  const p2 = new Point2(3, 4);
  const p3 = p1.add(p2);
  console.assert(p3.x === p1.x + p2.x);
  console.assert(p3.y === p1.y + p2.y);
}

// クラスPoint2にメソッドsubを追加してください。 p1.sub(p2)はp1とp2のxの差とyの差を持つPoint2のインスタンスを返すメソッドです。

class Point2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(p2) {
    return new Point2(this.x + p2.x, this.y + p2.y);
  }
  sub(p2) {
    return new Point2(this.x - p2.x, this.y - p2.y);
  }
}
{
  const p1 = new Point2(1, 2);
  const p2 = new Point2(3, 4);
  const p3 = p1.sub(p2);
  console.assert(p3.x === p1.x - p2.x);
  console.assert(p3.y === p1.y - p2.y);
}

// クラスPoint2にメソッドdistanceを追加してください。 p1.distance(p2)はp1とp2の距離を返すメソッドです。



