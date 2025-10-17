// src/utils/hitokoto.ts
export async function fetchHitokoto(count = 5): Promise<string[]> {
  try {
    // 批量获取多条一言
    const results = await Promise.all(
      Array.from({ length: count }).map(() => 
        fetch('https://v1.hitokoto.cn?c=i') // c=i 表示动漫分类
          .then(res => res.json())
          .then(data => data.hitokoto as string)
      )
    );
    return results;
  } catch (error) {
    console.error('获取一言失败:', error);
    // 失败时返回默认文本
    return [
      "现在我成为了死神，诸界的毁灭者",
      "从前曾发生过一次爆炸……",
    ];
  }
}