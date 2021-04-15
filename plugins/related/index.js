const config = {
  properRate: 2,
  baseRate: 1,
  negativeCategory: -10,
  maxTagNum: 20,
  isRelatedPoint: 40,
};

const get = (allPostNodes, baseNode) => {
  const relatedNodesWithPoint = [];
  const baseTags = {
    proper: baseNode.frontmatter.propertags,
    common: baseNode.frontmatter.commontags,
  };

  allPostNodes.forEach(tempNode => {
    const targetNode = tempNode.node;

    // 記事が同じだったらスキップ
    if (baseNode.id === targetNode.id) return;
    // カテゴリが異なっていたらスキップ
    if (baseNode.frontmatter.category !== targetNode.frontmatter.category) return;


    // 比較する記事
    const targetTags = {
      proper: targetNode.frontmatter.propertags,
      common: targetNode.frontmatter.commontags,
    }

    /**
     * ここからポイント計算
     */

    let targetPoint = 0;

    // 固有名詞計算
    if (baseTags.proper) {
      baseTags.proper.forEach((baseProperTag, baseProperIndex) => {
        if (!targetTags.proper) return;
        targetTags.proper.forEach((targetProperTag, targetProperIndex) => {
          if (baseProperTag === targetProperTag) {
            targetPoint += (config.maxTagNum - baseProperIndex) * config.baseRate;
            targetPoint += (config.maxTagNum - targetProperIndex);
          }
        })
      })
      if (targetPoint !== 0) targetPoint = targetPoint * config.properRate;
    }

    // 普通名詞計算
    if (baseTags.common) {
      baseTags.common.forEach((baseCommonTag, baseCommonIndex) => {
        if (!targetTags.common) return;
        targetTags.common.forEach((targetCommonTag, targetCommonIndex) => {
          if (baseCommonTag === targetCommonTag) {
            targetPoint += (config.maxTagNum - baseCommonIndex) * config.baseRate;
            targetPoint += (config.maxTagNum - targetCommonIndex);
          }
        })
      })
    }


    // もしヒットしていたら、関連記事リストに追加
    if (targetPoint !== 0) {

      // もし関連しているとみなす設定値より低かったら除外する
      if (targetPoint < config.isRelatedPoint) return;

      relatedNodesWithPoint.push({
        node: targetNode,
        point: targetPoint,
      });
    }
  });

  // ポイントの高い順からソート
  relatedNodesWithPoint.sort((a, b) => {
    return b.point - a.point;
  });

  // このコメントアウトを外すと、関連記事のポイント表示
  //
  // console.log('---------------------');
  // console.log(`「${baseNode.frontmatter.title}」`)
  // relatedNodesWithPoint.forEach(node => {
  //   console.log(`point: ${node.point}, ${node.node.frontmatter.title}`);
  // })

  // node情報のみにして返却
  return relatedNodesWithPoint.map(node => node.node);
}

exports.get = get;
