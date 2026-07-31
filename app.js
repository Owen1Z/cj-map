const venues = {
  overview: {
    label: "\u573a\u9986\u603b\u89c8",
    image: "overview.png",
    area: "\u5168\u90e8\u53ef\u8fbe\u573a\u9986",
    description: "\u5148\u770b\u6574\u4f53\u4f4d\u7f6e\uff0c\u518d\u70b9\u8fdb\u5177\u4f53\u573a\u9986\u67e5\u770b\u5382\u5546\u3001\u5c55\u4f4d\u548c\u65e0\u6599\u3002",
  },
  N1: {
    label: "N1 \u6e38\u620f\u98ce\u4e91",
    image: "n1.png",
    area: "N \u9986 / \u6e38\u620f",
    description: "\u4e3b\u673a\u3001\u6e38\u620f\u5a92\u4f53\u548c\u4f53\u9a8c\u5c55\u4f4d\uff0c\u9002\u5408\u5f00\u573a\u5148\u901b\u3002",
  },
  N2: {
    label: "N2 \u6e38\u620f\u98ce\u4e91",
    image: "n2.png",
    area: "N \u9986 / \u6e38\u620f",
    description: "Bilibili\u3001\u597d\u6e38\u5feb\u7206\u548c\u591a\u4eba\u4e92\u52a8\u5c55\u4f4d\u96c6\u4e2d\u3002",
  },
  N3: {
    label: "N3 \u6e38\u620f\u98ce\u4e91",
    image: "n3.png",
    area: "N \u9986 / \u6e38\u620f",
    description: "\u9e3f\u8499\u3001\u7f51\u6613\u3001\u66b4\u96ea\u548c\u6e38\u620f\u4f53\u9a8c\u70b9\u3002",
  },
  N4: {
    label: "N4 \u6e38\u620f\u98ce\u4e91",
    image: "n4.png",
    area: "N \u9986 / \u6e38\u620f",
    description: "\u817e\u8baf\u3001\u54aa\u5495\u7b49\u5c55\u4f4d\uff0c\u9002\u5408\u5728\u5348\u540e\u9519\u5cf0\u67e5\u770b\u3002",
  },
  N5: {
    label: "N5 \u9a81\u9f99\u4e3b\u9898\u9986",
    image: "n5.png",
    area: "N \u9986 / \u786c\u4ef6",
    description: "\u4e00\u52a0\u3001\u7ea2\u9b54\u7b49\u79fb\u52a8\u8bbe\u5907\u548c\u7535\u7ade\u786c\u4ef6\u3002",
  },
  E3: {
    label: "E3 \u751c\u6b21\u5143\u6f6e\u6d41\u751f\u6d3b",
    image: "e3.png",
    area: "E \u9986 / \u4e8c\u6b21\u5143",
    description: "\u6f6e\u6d41\u751f\u6d3b\u3001\u89d2\u8272\u5185\u5bb9\u548c\u8f7b\u91cf\u6253\u5361\u70b9\u3002",
  },
  E4: {
    label: "E4 \u6b21\u5143\u89c6\u754c / \u6444\u5f71\u533a",
    image: "e4.png",
    area: "E \u9986 / \u6444\u5f71",
    description: "\u7d22\u5c3c\u5f71\u50cf\u3001Polaroid \u548c\u6444\u5f71\u5411\u5c55\u4f4d\u3002",
  },
  E5: {
    label: "E5 \u6a21\u73a9\u5929\u5730",
    image: "e5.png",
    area: "E \u9986 / \u6a21\u73a9",
    description: "\u6f6e\u73a9\u3001\u6a21\u578b\u548c\u6536\u85cf\u7c7b\u4e92\u52a8\u5c55\u4f4d\u3002",
  },
  E6: {
    label: "E6 \u53d1\u70e7\u786c\u4ef6",
    image: "e6.png",
    area: "E \u9986 / \u786c\u4ef6",
    description: "\u663e\u793a\u5668\u3001\u952e\u9f20\u3001\u638c\u673a\u548c\u684c\u642d\u786c\u4ef6\u96c6\u4e2d\u3002",
  },
  E7: {
    label: "E7 \u53d1\u70e7\u786c\u4ef6",
    image: "e7.png",
    area: "E \u9986 / \u786c\u4ef6",
    description: "\u952e\u9f20\u3001\u7535\u7ade\u8bbe\u5907\u548c\u684c\u9762\u88c5\u5907\uff0c\u9002\u5408\u540e\u6bb5\u6162\u901b\u3002",
  },
};

const spotlight = [
  {
    venue: "N1", code: "N1-G001", name: "PlayStation", type: "\u4e3b\u673a\u6e38\u620f",
    tags: ["PlayStation", "\u6e38\u620f\u4f53\u9a8c", "\u4f18\u5148"], priority: true,
    intro: "\u4e3b\u673a\u73a9\u5bb6\u4f18\u5148\u76ee\u6807\uff0c\u5efa\u8bae\u5f00\u573a\u5148\u786e\u8ba4\u8bd5\u73a9\u548c\u6392\u961f\u89c4\u5219\u3002",
    egg: "\u4ee5\u73b0\u573a\u6d3b\u52a8\u4e3a\u51c6\uff0c\u91cd\u70b9\u5173\u6ce8\u8bd5\u73a9\u3001\u62cd\u7167\u548c\u5b98\u65b9\u4e92\u52a8\u3002",
    steps: ["\u5230\u8fbe N1-G001\uff0c\u5148\u770b\u5f53\u5929\u6d3b\u52a8\u724c", "\u6309\u5de5\u4f5c\u4eba\u5458\u6307\u5f15\u5b8c\u6210\u8bd5\u73a9\u6216\u4e92\u52a8", "\u786e\u8ba4\u662f\u5426\u9700\u8981\u5173\u6ce8\u5b98\u65b9\u8d26\u53f7\u540e\u9886\u53d6"],
    requirements: "\u666e\u901a\u89c2\u4f17\u53ef\u8fbe\uff1b\u70ed\u95e8\u65f6\u6bb5\u53ef\u80fd\u6392\u961f\uff0c\u5efa\u8bae\u4e0a\u5348\u5904\u7406\u3002",
    note: "\u5b98\u65b9\u5c55\u4f4d\u4fe1\u606f\u5df2\u6838\u9a8c\uff1b\u5177\u4f53\u8d60\u54c1\u4ee5\u73b0\u573a\u5e93\u5b58\u548c\u6d3b\u52a8\u724c\u4e3a\u51c6\u3002",
  },
  {
    venue: "N1", code: "N1-G202", name: "aigo", type: "\u786c\u4ef6",
    tags: ["\u786c\u4ef6", "\u6253\u5361"], priority: true,
    intro: "N1 \u786c\u4ef6\u5411\u91cd\u70b9\u5c55\u4f4d\uff0c\u9002\u5408\u4e0e PlayStation \u540c\u6bb5\u5904\u7406\u3002",
    egg: "\u73b0\u573a\u4e92\u52a8\u3001\u62cd\u7167\u6216\u5173\u6ce8\u6d3b\u52a8\u53ef\u80fd\u5bf9\u5e94\u5c0f\u793c\u7269\u3002",
    steps: ["\u5230\u5c55\u4f4d\u786e\u8ba4\u5f53\u65e5\u4e92\u52a8\u9879\u76ee", "\u5b8c\u6210\u5de5\u4f5c\u4eba\u5458\u6307\u5b9a\u7684\u4e92\u52a8", "\u9886\u53d6\u7269\u6599\u5e76\u786e\u8ba4\u662f\u5426\u9650\u91cf"],
    requirements: "\u4ee5\u73b0\u573a\u6d3b\u52a8\u724c\u4e3a\u51c6\uff1b\u70ed\u95e8\u6d3b\u52a8\u5efa\u8bae\u907f\u5f00\u4e2d\u5348\u3002",
    note: "\u76ee\u524d\u6682\u65e0\u7a33\u5b9a\u7684\u5177\u4f53\u8d60\u54c1\u6e05\u5355\uff0c\u9875\u9762\u5c06\u5176\u6807\u8bb0\u4e3a\u5f85\u73b0\u573a\u786e\u8ba4\u3002",
  },
  {
    venue: "N1", code: "N1-G205", name: "GSE", type: "\u6e38\u620f\u53d1\u884c",
    tags: ["\u5c0f\u518c\u5b50", "\u96c6\u7ae0"], hasEgg: true,
    intro: "\u9002\u5408\u987a\u8def\u9886\u53d6\u8d44\u6599\u578b\u7269\u6599\uff0c\u901a\u5e38\u6bd4\u5927\u578b\u4e92\u52a8\u70b9\u7701\u65f6\u95f4\u3002",
    egg: "\u5165\u573a\u53ef\u9886\u53d6\u5c0f\u518c\u5b50\u548c\u96c6\u7ae0\u672c\u3002",
    steps: ["\u5230 N1-G205 \u627e GSE \u5c55\u4f4d", "\u5165\u573a\u65f6\u8be2\u95ee\u5c0f\u518c\u5b50\u548c\u96c6\u7ae0\u672c", "\u82e5\u6709\u96c6\u7ae0\u4efb\u52a1\uff0c\u5148\u62ff\u672c\u518d\u6309\u73b0\u573a\u6307\u5f15\u5b8c\u6210"],
    requirements: "\u6570\u91cf\u6709\u9650\uff0c\u5efa\u8bae\u4e0a\u5348\u9886\u53d6\uff1b\u65e0\u9700\u9ed8\u8ba4\u6392\u957f\u961f\u3002",
    note: "\u4fe1\u606f\u6765\u81ea\u7528\u6237\u73b0\u573a\u5206\u4eab\uff0c\u5177\u4f53\u6b3e\u5f0f\u548c\u5e93\u5b58\u4ee5\u73b0\u573a\u4e3a\u51c6\u3002",
  },
  {
    venue: "N2", code: "N2-01", name: "\u9e45\u9e2d\u6740", type: "\u591a\u4eba\u6e38\u620f",
    tags: ["\u4e92\u52a8\u6e38\u620f", "\u9650\u5b9a\u5468\u8fb9"], hasEgg: true,
    intro: "\u591a\u4eba\u4e92\u52a8\u578b\u5c55\u4f4d\uff0c\u9002\u5408\u559c\u6b22\u6e38\u620f\u5468\u8fb9\u7684\u89c2\u4f17\u3002",
    egg: "\u53c2\u4e0e\u4e92\u52a8\u5c0f\u6e38\u620f\uff0c\u6709\u673a\u4f1a\u9886\u53d6\u9650\u5b9a\u5468\u8fb9\u3002",
    steps: ["\u5230 N2-01 \u8be2\u95ee\u5f53\u65e5\u5c0f\u6e38\u620f", "\u5b8c\u6210\u4e00\u8f6e\u6307\u5b9a\u4e92\u52a8", "\u51ed\u5b8c\u6210\u7ed3\u679c\u5411\u5de5\u4f5c\u4eba\u5458\u9886\u53d6\u5468\u8fb9"],
    requirements: "\u5956\u54c1\u548c\u53c2\u4e0e\u540d\u989d\u53ef\u80fd\u9650\u91cf\uff0c\u5efa\u8bae\u5148\u95ee\u6e05\u662f\u5426\u9700\u8981\u6392\u961f\u6216\u9884\u7ea6\u3002",
    note: "\u7528\u6237\u7ecf\u9a8c\u8d34\u63cf\u8ff0\u4e3a\u6709\u673a\u4f1a\u9886\u53d6\uff0c\u4e0d\u4ee3\u8868\u6bcf\u4f4d\u53c2\u4e0e\u8005\u90fd\u80fd\u62ff\u5230\u540c\u6b3e\u3002",
  },
  {
    venue: "N2", code: "N2-02", name: "\u54d4\u54e9\u54d4\u54e9", type: "\u6e38\u620f / \u4e8c\u6b21\u5143",
    tags: ["Bilibili", "\u70ed\u95e8", "\u4f18\u5148"], priority: true,
    intro: "\u4f60\u7684\u504f\u597d\u4f18\u5148\u9879\uff0c\u5efa\u8bae\u628a\u6838\u5fc3\u6d3b\u52a8\u548c\u7269\u6599\u5206\u5f00\u770b\uff0c\u5148\u786e\u8ba4\u6392\u961f\u673a\u5236\u3002",
    egg: "\u73b0\u573a\u6d3b\u52a8\u3001\u6e38\u620f\u8bd5\u73a9\u6216\u6253\u5361\u53ef\u80fd\u5bf9\u5e94\u5468\u8fb9\uff0c\u5177\u4f53\u4ee5\u5f53\u5929\u4efb\u52a1\u724c\u4e3a\u51c6\u3002",
    steps: ["\u5230 N2-02 \u5148\u62cd\u4e0b\u6d3b\u52a8\u65f6\u95f4\u548c\u9886\u53d6\u89c4\u5219", "\u4f18\u5148\u5904\u7406\u65e0\u9700\u957f\u961f\u7684\u6253\u5361\u6216\u4efb\u52a1", "\u518d\u6839\u636e\u5269\u4f59\u65f6\u95f4\u51b3\u5b9a\u662f\u5426\u6392\u70ed\u95e8\u4e92\u52a8"],
    requirements: "\u4eba\u6d41\u9884\u8ba1\u8f83\u9ad8\uff1b\u666e\u901a\u7968\u53ef\u8fdb\u5165 N2\uff0c\u70ed\u95e8\u821e\u53f0\u548c\u4e92\u52a8\u53ef\u80fd\u9700\u6392\u961f\u3002",
    note: "\u672a\u628a\u672a\u7ecf\u786e\u8ba4\u7684\u5177\u4f53\u5468\u8fb9\u5199\u6b7b\uff0c\u907f\u514d\u628a\u5f80\u5c4a\u7269\u6599\u8bef\u5f53\u6210 2026 \u73b0\u573a\u7269\u6599\u3002",
  },
  {
    venue: "N2", code: "N2-11-1", name: "4399", type: "\u6e38\u620f\u5e73\u53f0",
    tags: ["\u6e38\u620f", "\u4e92\u52a8"],
    intro: "\u53ef\u4f5c\u4e3a N2 \u6e38\u620f\u533a\u7684\u987a\u8def\u8865\u5145\u70b9\u3002",
    egg: "\u73b0\u573a\u4e92\u52a8\u548c\u8bd5\u73a9\u7c7b\u7269\u6599\u4ee5\u5c55\u4f4d\u89c4\u5219\u4e3a\u51c6\u3002",
    steps: ["\u5230\u5c55\u4f4d\u770b\u4e92\u52a8\u724c", "\u5b8c\u6210\u6307\u5b9a\u8bd5\u73a9\u6216\u95ee\u7b54", "\u8be2\u95ee\u9886\u53d6\u70b9\u548c\u6bcf\u65e5\u5e93\u5b58"],
    requirements: "\u4f18\u5148\u9009\u62e9\u65e0\u9700\u957f\u961f\u7684\u9879\u76ee\u3002",
    note: "\u5b98\u65b9\u540d\u5355\u53ef\u6838\u9a8c\uff0c\u7269\u6599\u8bb0\u5f55\u6682\u4e0d\u5982\u91cd\u70b9\u5c0f\u7ea2\u4e66\u7ecf\u9a8c\u7a33\u5b9a\u3002",
  },
  {
    venue: "N2", code: "N2-11-2", name: "\u597d\u6e38\u5feb\u7206", type: "\u6e38\u620f\u5a92\u4f53",
    tags: ["\u8bd5\u73a9", "\u96c6\u7ae0", "\u6e38\u620f\u5468\u8fb9"], hasEgg: true,
    intro: "\u9002\u5408\u4e00\u8fb9\u8bd5\u73a9\u4e00\u8fb9\u5b8c\u6210\u96c6\u7ae0\uff0c\u6548\u7387\u53d6\u51b3\u4e8e\u73b0\u573a\u961f\u5217\u3002",
    egg: "\u8bd5\u73a9\u3001\u96c6\u7ae0\u540e\u53ef\u9886\u53d6\u6e38\u620f\u5468\u8fb9\u3002",
    steps: ["\u5230 N2-11-2 \u9886\u53d6\u4efb\u52a1\u6216\u96c6\u7ae0\u8bf4\u660e", "\u5b8c\u6210\u8bd5\u73a9\u548c\u6307\u5b9a\u96c6\u7ae0", "\u96c6\u9f50\u540e\u5230\u5151\u6362\u5904\u9886\u53d6\u5468\u8fb9"],
    requirements: "\u5148\u786e\u8ba4\u96c6\u7ae0\u70b9\u3001\u5151\u6362\u65f6\u95f4\u548c\u6bcf\u65e5\u4e0a\u9650\u3002",
    note: "\u6765\u81ea\u7528\u6237\u7ecf\u9a8c\u8d34\uff0c\u5956\u54c1\u53ef\u80fd\u6309\u5e93\u5b58\u5206\u6279\u53d1\u653e\u3002",
  },
  {
    venue: "N2", code: "N2-G201", name: "\u4ee3\u53f7\uff1a\u9999", type: "\u4e8c\u6b21\u5143\u6e38\u620f",
    tags: ["\u6574\u7406\u5238", "\u4f38\u624b\u793c", "\u70ed\u95e8"], hasEgg: true, priority: true,
    intro: "\u9ad8\u70ed\u5ea6\u4e92\u52a8\u70b9\uff0c\u9002\u5408\u65e9\u5230\u540e\u5148\u786e\u8ba4\u6574\u7406\u5238\u3002",
    egg: "\u6574\u7406\u5238\u7ea6 1500 \u5f20\uff0c\u95ee\u7b54\u9884\u7ea6\u5361\u7ea6 300 \u5f20\uff0c\u5e76\u6709\u4f38\u624b\u793c\u3002",
    steps: ["\u5230 N2-G201 \u5148\u8be2\u95ee\u6574\u7406\u5238\u53d1\u653e\u65f6\u95f4", "\u6309\u6574\u7406\u5238\u6216\u9884\u7ea6\u5361\u65f6\u6bb5\u53c2\u4e0e\u95ee\u7b54/\u4e92\u52a8", "\u5b8c\u6210\u540e\u51ed\u89c4\u5219\u9886\u53d6\u4f38\u624b\u793c"],
    requirements: "\u6574\u7406\u5238\u548c\u95ee\u7b54\u9884\u7ea6\u5361\u5747\u53ef\u80fd\u5feb\u901f\u53d1\u5b8c\uff0c\u5efa\u8bae\u4e0a\u5348\u4f18\u5148\u3002",
    note: "\u6570\u91cf\u6765\u81ea\u7528\u6237\u5206\u4eab\uff0c\u73b0\u573a\u82e5\u6709\u8c03\u6574\u4ee5\u5de5\u4f5c\u4eba\u5458\u516c\u544a\u4e3a\u51c6\u3002",
  },
  {
    venue: "N3", code: "N3-01", name: "\u534e\u4e3a\u9e3f\u8499", type: "\u7cfb\u7edf / \u6e38\u620f\u751f\u6001",
    tags: ["\u9e3f\u8499", "\u4efb\u52a1", "\u79fb\u52a8\u7535\u6e90"], hasEgg: true, priority: true,
    intro: "\u9002\u5408\u666e\u901a\u89c2\u4f17\u4f4e\u6210\u672c\u6253\u5361\uff0c\u4f46\u79fb\u52a8\u7535\u6e90\u5e93\u5b58\u5b58\u5728\u4e0d\u540c\u8bf4\u6cd5\u3002",
    egg: "\u6536\u96c6\u9e3f\u8499\u56fe\u9274\u6216\u5b8c\u6210\u4efb\u52a1\uff0c\u7528\u6237\u5206\u4eab\u63d0\u5230\u53ef\u9886\u53d6\u79fb\u52a8\u7535\u6e90\u3002",
    steps: ["\u5230 N3-01 \u9886\u53d6\u9e3f\u8499\u56fe\u9274\u6216\u4efb\u52a1\u5361", "\u6309\u4efb\u52a1\u5b8c\u6210\u4f53\u9a8c\u3001\u4e92\u52a8\u6216\u6253\u5361", "\u5230\u5151\u6362\u5904\u6838\u9a8c\u4efb\u52a1\u5e76\u9886\u53d6\u793c\u54c1"],
    requirements: "\u79fb\u52a8\u7535\u6e90\u6570\u91cf\u548c\u5151\u6362\u89c4\u5219\u4ee5\u73b0\u573a\u4e3a\u51c6\uff0c\u5efa\u8bae\u5f00\u573a\u5148\u95ee\u5e93\u5b58\u3002",
    note: "\u4e0d\u540c\u6587\u7ae0\u51fa\u73b0 1000 / 4500 \u4efd\u4e24\u79cd\u8bf4\u6cd5\uff0c\u9875\u9762\u6309\u2018\u6570\u91cf\u5f85\u6838\u9a8c\u2019\u5904\u7406\u3002",
  },
  {
    venue: "N3", code: "N3-02", name: "\u7f51\u6613\u6e38\u620f", type: "\u6e38\u620f",
    tags: ["\u6e38\u620f", "\u8bd5\u73a9"], priority: true,
    intro: "N3 \u6e38\u620f\u533a\u91cd\u70b9\u5382\u5546\uff0c\u53ef\u4e0e\u66b4\u96ea\u548c\u534e\u4e3a\u4e00\u8d77\u5b89\u6392\u3002",
    egg: "\u8bd5\u73a9\u3001\u821e\u53f0\u6216\u4e92\u52a8\u8d60\u54c1\u4ee5\u5f53\u5929\u6d3b\u52a8\u5b89\u6392\u4e3a\u51c6\u3002",
    steps: ["\u5230 N3-02 \u67e5\u770b\u6d3b\u52a8\u724c", "\u4f18\u5148\u9009\u62e9\u77ed\u65f6\u8bd5\u73a9\u6216\u65e0\u9700\u9884\u7ea6\u7684\u9879\u76ee", "\u5b8c\u6210\u4e92\u52a8\u540e\u8be2\u95ee\u5151\u6362\u70b9"],
    requirements: "\u70ed\u95e8 IP \u53ef\u80fd\u6392\u961f\uff0c\u5efa\u8bae\u5148\u8bb0\u5f55\u6d3b\u52a8\u65f6\u95f4\u3002",
    note: "\u5b98\u65b9\u540d\u5355\u5df2\u6838\u9a8c\uff0c\u5177\u4f53\u65e0\u6599\u672a\u5728\u7a33\u5b9a\u6765\u6e90\u4e2d\u786e\u8ba4\u3002",
  },
  {
    venue: "N3", code: "N3-03", name: "\u66b4\u96ea", type: "\u6e38\u620f",
    tags: ["\u6e38\u620f", "\u70ed\u95e8"], priority: true,
    intro: "\u70ed\u95e8\u6e38\u620f\u5382\u5546\uff0c\u63a8\u8350\u9519\u5cf0\u67e5\u770b\u6d3b\u52a8\u548c\u5468\u8fb9\u3002",
    egg: "\u5173\u6ce8\u3001\u62cd\u7167\u3001\u53d1\u5e16\u7b49\u6d3b\u52a8\u53ef\u80fd\u5bf9\u5e94\u7eaa\u5ff5\u7269\u6599\u3002",
    steps: ["\u5148\u8be2\u95ee\u662f\u5426\u6709\u73b0\u573a\u4efb\u52a1\u6216\u6253\u5361\u89c4\u5219", "\u6309\u8981\u6c42\u5173\u6ce8\u3001\u62cd\u7167\u6216\u53d1\u5e03\u5185\u5bb9", "\u51ed\u5b8c\u6210\u9875\u9762\u5230\u5151\u6362\u5904\u9886\u53d6"],
    requirements: "\u90e8\u5206\u7528\u6237\u5206\u4eab\u63d0\u5230\u6bcf\u65e5\u6d77\u62a5 1000 \u4efd\uff0c\u5e93\u5b58\u4ee5\u73b0\u573a\u4e3a\u51c6\u3002",
    note: "\u2018\u6bcf\u65e5\u6d77\u62a5 1000 \u4efd\u2019\u6765\u81ea\u7528\u6237\u7ecf\u9a8c\uff0c\u5176\u4ed6\u5468\u8fb9\u4e0d\u8981\u9ed8\u8ba4\u4fdd\u8bc1\u3002",
  },
  {
    venue: "N3", code: "N3-06", name: "HKC", type: "\u663e\u793a\u5668 / \u786c\u4ef6",
    tags: ["\u786c\u4ef6", "\u663e\u793a\u5668"], priority: true,
    intro: "\u786c\u4ef6\u504f\u597d\u4f18\u5148\u70b9\uff0c\u9002\u5408\u5728\u4eba\u6d41\u8f83\u4f4e\u65f6\u5feb\u901f\u770b\u4ea7\u54c1\u3002",
    egg: "\u73b0\u573a\u4f53\u9a8c\u3001\u62cd\u7167\u6216\u4e92\u52a8\u793c\u54c1\u4ee5\u6d3b\u52a8\u724c\u4e3a\u51c6\u3002",
    steps: ["\u5230 N3-06 \u5148\u770b\u662f\u5426\u6709\u7b7e\u5230/\u4e92\u52a8\u4efb\u52a1", "\u5b8c\u6210\u6307\u5b9a\u4f53\u9a8c\u6216\u6253\u5361", "\u8be2\u95ee\u662f\u5426\u6709\u6bcf\u65e5\u9650\u91cf\u793c\u54c1"],
    requirements: "\u6682\u65e0\u7a33\u5b9a\u7684\u5177\u4f53\u65e0\u6599\u6e05\u5355\u3002",
    note: "\u5b98\u65b9\u5c55\u4f4d\u4fe1\u606f\u5df2\u6838\u9a8c\u3002",
  },
  {
    venue: "N3", code: "N3-09", name: "\u6211\u7684\u82b1\u56ed\u4e16\u754c", type: "\u6e38\u620f / \u751f\u6d3b\u65b9\u5f0f",
    tags: ["\u62cd\u7167\u6253\u5361", "\u9650\u5b9a\u5468\u8fb9"], hasEgg: true,
    intro: "\u8f7b\u91cf\u62cd\u7167\u70b9\uff0c\u9002\u5408\u9519\u5f00\u5927\u578b\u5c55\u4f4d\u540e\u8865\u5145\u3002",
    egg: "\u62cd\u7167\u6253\u5361\uff0c\u6709\u673a\u4f1a\u83b7\u5f97\u9c9c\u82b1\u548c\u9650\u5b9a\u5468\u8fb9\u3002",
    steps: ["\u5230 N3-09 \u627e\u5230\u62cd\u7167\u6253\u5361\u70b9", "\u6309\u73b0\u573a\u8981\u6c42\u5b8c\u6210\u62cd\u7167\u6216\u53d1\u5e03", "\u5411\u5de5\u4f5c\u4eba\u5458\u786e\u8ba4\u9886\u53d6\u65b9\u5f0f"],
    requirements: "\u662f\u2018\u6709\u673a\u4f1a\u2019\u800c\u975e\u56fa\u5b9a\u53d1\u653e\uff0c\u5148\u95ee\u6bcf\u65e5\u5e93\u5b58\u3002",
    note: "\u6765\u81ea\u7528\u6237\u7ecf\u9a8c\u8d34\u3002",
  },
  {
    venue: "N3", code: "N3-10", name: "\u5ce1\u8c37\u4e89\u950b", type: "\u7535\u7ade\u6e38\u620f",
    tags: ["\u96c6\u7ae0", "\u626d\u86cb", "\u5468\u8fb9"], hasEgg: true,
    intro: "\u4efb\u52a1\u8f83\u591a\uff0c\u9002\u5408\u6709\u65f6\u95f4\u5b8c\u6210\u4e00\u6574\u5957\u96c6\u7ae0\u7684\u89c2\u4f17\u3002",
    egg: "\u96c6\u7ae0\u3001PR \u5361\u3001\u5427\u5527\u3001\u900f\u6247\u3001\u7f16\u7ec7\u888b\u548c\u626d\u86cb\u7b49\u3002",
    steps: ["\u5230 N3-10 \u9886\u53d6\u96c6\u7ae0\u5361", "\u5b8c\u6210\u5404\u4e92\u52a8\u70b9\u5e76\u96c6\u9f50\u5370\u7ae0", "\u6309\u96c6\u7ae0\u7ed3\u679c\u5151\u6362 PR \u5361\u3001\u5427\u5527\u6216\u626d\u86cb"],
    requirements: "\u4e0d\u540c\u5956\u52b1\u5bf9\u5e94\u4e0d\u540c\u5b8c\u6210\u5ea6\uff0c\u5148\u786e\u8ba4\u5151\u6362\u8868\u548c\u5269\u4f59\u5e93\u5b58\u3002",
    note: "\u7269\u6599\u6e05\u5355\u6765\u81ea\u7528\u6237\u7ecf\u9a8c\u8d34\uff0c\u6b3e\u5f0f\u548c\u6570\u91cf\u53ef\u80fd\u53d8\u5316\u3002",
  },
  {
    venue: "N4", code: "N4-03", name: "\u817e\u8baf / \u732b\u4ed9\u672d", type: "\u6e38\u620f / \u4e8c\u6b21\u5143",
    tags: ["\u817e\u8baf", "\u4e8c\u6b21\u5143"], priority: true,
    intro: "N4 \u91cd\u70b9\u5185\u5bb9\uff0c\u5efa\u8bae\u7528\u4f5c\u4e2d\u6bb5\u9519\u5cf0\u70b9\u3002",
    egg: "\u6d3b\u52a8\u3001\u8bd5\u73a9\u548c\u6253\u5361\u7269\u6599\u4ee5\u5f53\u5929\u89c4\u5219\u4e3a\u51c6\u3002",
    steps: ["\u5230 N4-03 \u67e5\u770b\u6d3b\u52a8\u724c", "\u4f18\u5148\u5904\u7406\u77ed\u6d41\u7a0b\u4e92\u52a8", "\u5b8c\u6210\u540e\u8be2\u95ee\u9886\u53d6\u7a97\u53e3\u548c\u5e93\u5b58"],
    requirements: "\u70ed\u95e8\u9879\u76ee\u53ef\u80fd\u6709\u65f6\u6bb5\u9650\u5236\u3002",
    note: "\u5b98\u65b9\u540d\u5355\u5df2\u6838\u9a8c\uff0c\u6682\u672a\u786e\u8ba4\u56fa\u5b9a\u7269\u6599\u3002",
  },
  {
    venue: "N4", code: "N4-05", name: "\u54aa\u5495", type: "\u6e38\u620f / \u5185\u5bb9",
    tags: ["\u6e38\u620f", "\u5185\u5bb9"],
    intro: "N4 \u53ef\u987a\u8def\u67e5\u770b\u7684\u5185\u5bb9\u5c55\u4f4d\u3002",
    egg: "\u73b0\u573a\u4e92\u52a8\u793c\u54c1\u4ee5\u5c55\u4f4d\u516c\u544a\u4e3a\u51c6\u3002",
    steps: ["\u8be2\u95ee\u5f53\u65e5\u4e92\u52a8", "\u6309\u8981\u6c42\u5b8c\u6210\u4f53\u9a8c\u6216\u6253\u5361", "\u73b0\u573a\u786e\u8ba4\u5151\u6362\u65b9\u5f0f"],
    requirements: "\u6682\u65e0\u7a33\u5b9a\u7684\u5177\u4f53\u65e0\u6599\u6e05\u5355\u3002",
    note: "\u5b98\u65b9\u540d\u5355\u5df2\u6838\u9a8c\u3002",
  },
  {
    venue: "N5", code: "N5-03", name: "\u4e00\u52a0", type: "\u624b\u673a / \u786c\u4ef6",
    tags: ["\u786c\u4ef6", "\u7535\u7ade"], priority: true,
    intro: "N5 \u786c\u4ef6\u5411\u91cd\u70b9\uff0c\u5efa\u8bae\u4e0e\u7ea2\u9b54\u5b89\u6392\u6210\u4e00\u7ec4\u3002",
    egg: "\u7b7e\u5230\u3001\u4e92\u52a8\u548c\u4f53\u9a8c\u793c\u54c1\u4ee5\u73b0\u573a\u89c4\u5219\u4e3a\u51c6\u3002",
    steps: ["\u5230 N5-03 \u67e5\u770b\u4f53\u9a8c\u533a\u4efb\u52a1", "\u5b8c\u6210\u6307\u5b9a\u4e92\u52a8\u6216\u4ea7\u54c1\u4f53\u9a8c", "\u8be2\u95ee\u793c\u54c1\u9886\u53d6\u70b9"],
    requirements: "\u6682\u65e0\u7a33\u5b9a\u7684\u5177\u4f53\u65e0\u6599\u6e05\u5355\u3002",
    note: "\u5b98\u65b9\u540d\u5355\u5df2\u6838\u9a8c\u3002",
  },
  {
    venue: "N5", code: "N5-08", name: "\u7ea2\u9b54", type: "\u7535\u7ade\u786c\u4ef6",
    tags: ["\u786c\u4ef6", "\u7535\u7ade", "\u70ed\u95e8"], priority: true,
    intro: "\u9002\u5408\u786c\u4ef6\u504f\u597d\u7528\u6237\uff0c\u70ed\u95e8\u65f6\u6bb5\u5efa\u8bae\u907f\u5f00\u3002",
    egg: "\u4ea7\u54c1\u4f53\u9a8c\u3001\u6311\u6218\u6216\u62cd\u7167\u6253\u5361\u793c\u54c1\u4ee5\u5f53\u5929\u89c4\u5219\u4e3a\u51c6\u3002",
    steps: ["\u5230 N5-08 \u5148\u95ee\u662f\u5426\u9700\u8981\u6392\u961f", "\u5b8c\u6210\u77ed\u6d41\u7a0b\u4f53\u9a8c\u6216\u6311\u6218", "\u6309\u5b8c\u6210\u7ed3\u679c\u9886\u53d6\u793c\u54c1"],
    requirements: "\u53ef\u80fd\u5b58\u5728\u6392\u961f\u548c\u9650\u91cf\uff0c\u5efa\u8bae\u4e0b\u5348\u9519\u5cf0\u3002",
    note: "\u5b98\u65b9\u540d\u5355\u5df2\u6838\u9a8c\u3002",
  },
  {
    venue: "E3", code: "E3-CA304", name: "Wink", type: "\u6f6e\u6d41\u751f\u6d3b",
    tags: ["\u4e8c\u6b21\u5143", "\u62cd\u7167"], priority: true,
    intro: "E3 \u8f7b\u91cf\u6253\u5361\u70b9\uff0c\u53ef\u653e\u5728 E \u9986\u540e\u534a\u7a0b\u3002",
    egg: "\u62cd\u7167\u3001\u4e92\u52a8\u6216\u5173\u6ce8\u6d3b\u52a8\u4ee5\u73b0\u573a\u516c\u544a\u4e3a\u51c6\u3002",
    steps: ["\u5230 E3-CA304 \u786e\u8ba4\u5f53\u65e5\u6253\u5361\u4efb\u52a1", "\u5b8c\u6210\u62cd\u7167\u6216\u4e92\u52a8", "\u8be2\u95ee\u662f\u5426\u6709\u5373\u65f6\u9886\u53d6\u7269\u6599"],
    requirements: "\u6682\u65e0\u7a33\u5b9a\u7684\u5177\u4f53\u7269\u6599\u6e05\u5355\u3002",
    note: "\u5b98\u65b9\u540d\u5355\u5df2\u6838\u9a8c\u3002",
  },
  {
    venue: "E4", code: "E4-M001", name: "\u7d22\u5c3c\u5f71\u50cf", type: "\u6444\u5f71 / \u786c\u4ef6",
    tags: ["Sony", "\u6444\u5f71", "\u786c\u4ef6"], priority: true,
    intro: "\u6444\u5f71\u5411\u91cd\u70b9\u5c55\u4f4d\uff0c\u4e5f\u9002\u5408 PlayStation \u7528\u6237\u987a\u4fbf\u6bd4\u8f83 Sony \u751f\u6001\u3002",
    egg: "\u4f53\u9a8c\u548c\u6253\u5361\u7269\u6599\u4ee5\u73b0\u573a\u6d3b\u52a8\u4e3a\u51c6\u3002",
    steps: ["\u5230 E4-M001 \u67e5\u770b\u4f53\u9a8c\u548c\u6253\u5361\u89c4\u5219", "\u5b8c\u6210\u6307\u5b9a\u4f53\u9a8c\u6216\u62cd\u6444\u4efb\u52a1", "\u8be2\u95ee\u662f\u5426\u6709\u5151\u6362\u7269\u6599"],
    requirements: "\u70ed\u95e8\u8bbe\u5907\u4f53\u9a8c\u53ef\u80fd\u6392\u961f\u3002",
    note: "\u5b98\u65b9\u540d\u5355\u5df2\u6838\u9a8c\u3002",
  },
  {
    venue: "E4", code: "E4-M306", name: "Polaroid", type: "\u6444\u5f71 / \u751f\u6d3b\u65b9\u5f0f",
    tags: ["\u6444\u5f71", "\u62cd\u7167"],
    intro: "\u8f7b\u91cf\u6444\u5f71\u6253\u5361\u70b9\uff0c\u53ef\u5728 E4 \u987a\u8def\u67e5\u770b\u3002",
    egg: "\u62cd\u7167\u6216\u4e92\u52a8\u8d60\u54c1\u4ee5\u73b0\u573a\u4e3a\u51c6\u3002",
    steps: ["\u786e\u8ba4\u662f\u5426\u6709\u73b0\u573a\u62cd\u6444\u4f53\u9a8c", "\u5b8c\u6210\u4e92\u52a8\u6216\u62cd\u7167", "\u5230\u5151\u6362\u5904\u786e\u8ba4\u793c\u54c1"],
    requirements: "\u6682\u65e0\u7a33\u5b9a\u7684\u5177\u4f53\u7269\u6599\u6e05\u5355\u3002",
    note: "\u5b98\u65b9\u540d\u5355\u5df2\u6838\u9a8c\u3002",
  },
  {
    venue: "E5", code: "E5-FM102", name: "\u6dd8\u5929\u6f6e\u73a9", type: "\u6f6e\u73a9 / \u6a21\u73a9",
    tags: ["\u96c6\u7ae0", "\u626d\u86cb", "\u70ed\u95e8"], hasEgg: true, priority: true,
    intro: "\u7269\u6599\u8bb0\u5f55\u660e\u786e\uff0c\u4f46\u4e92\u52a8\u70b9\u8f83\u591a\uff0c\u9002\u5408\u9884\u7559\u5b8c\u6574\u65f6\u95f4\u3002",
    egg: "4 \u4e2a\u4e92\u52a8\u96c6\u7ae0\uff0c\u62bd\u9650\u5b9a\u626d\u86cb\uff0c\u73b0\u573a\u6709 3 \u4e07+\u5468\u8fb9\u3002",
    steps: ["\u5230 E5-FM102 \u9886\u53d6\u96c6\u7ae0\u8bf4\u660e", "\u5b8c\u6210 4 \u4e2a\u4e92\u52a8\u5e76\u96c6\u9f50\u5370\u7ae0", "\u6309\u89c4\u5219\u62bd\u9650\u5b9a\u626d\u86cb\u6216\u5151\u6362\u5468\u8fb9"],
    requirements: "\u4e0d\u540c\u4e92\u52a8\u548c\u5956\u54c1\u53ef\u80fd\u6709\u6bcf\u65e5\u4e0a\u9650\uff0c\u5148\u786e\u8ba4\u5151\u6362\u65f6\u95f4\u3002",
    note: "\u6570\u91cf\u6765\u81ea\u7528\u6237\u7ecf\u9a8c\u8d34\uff0c\u20183 \u4e07+\u2019\u4e0d\u4ee3\u8868\u6bcf\u79cd\u5468\u8fb9\u90fd\u5145\u8db3\u3002",
  },
  {
    venue: "E6", code: "E6-E001", name: "\u7ef4\u4fe1\u8bfa", type: "\u663e\u793a / \u786c\u4ef6",
    tags: ["\u786c\u4ef6", "\u663e\u793a"], priority: true,
    intro: "E6 \u786c\u4ef6\u533a\u53ef\u5feb\u901f\u6d4f\u89c8\u7684\u663e\u793a\u6280\u672f\u5c55\u4f4d\u3002",
    egg: "\u4e92\u52a8\u548c\u4f53\u9a8c\u793c\u54c1\u4ee5\u5c55\u4f4d\u89c4\u5219\u4e3a\u51c6\u3002",
    steps: ["\u67e5\u770b\u662f\u5426\u6709\u7b7e\u5230\u6216\u4f53\u9a8c\u4efb\u52a1", "\u5b8c\u6210\u4efb\u52a1", "\u786e\u8ba4\u9650\u91cf\u7269\u6599\u9886\u53d6\u65b9\u5f0f"],
    requirements: "\u6682\u65e0\u7a33\u5b9a\u7684\u5177\u4f53\u65e0\u6599\u6e05\u5355\u3002",
    note: "\u5b98\u65b9\u540d\u5355\u5df2\u6838\u9a8c\u3002",
  },
  {
    venue: "E6", code: "E6-E002", name: "Sony INZONE", type: "\u7535\u7ade\u786c\u4ef6",
    tags: ["Sony", "\u786c\u4ef6", "\u4f18\u5148"], priority: true,
    intro: "\u786c\u4ef6\u548c Sony \u504f\u597d\u4ea4\u53c9\u76ee\u6807\uff0c\u5efa\u8bae\u5728\u4eba\u6d41\u4f4e\u65f6\u4f53\u9a8c\u3002",
    egg: "\u8bd5\u73a9\u3001\u62cd\u7167\u6216\u4e92\u52a8\u793c\u54c1\u4ee5\u73b0\u573a\u89c4\u5219\u4e3a\u51c6\u3002",
    steps: ["\u5230 E6-E002 \u786e\u8ba4\u4f53\u9a8c\u6392\u961f\u89c4\u5219", "\u5b8c\u6210\u8033\u673a/\u663e\u793a\u8bbe\u5907\u4f53\u9a8c", "\u8be2\u95ee\u662f\u5426\u6709\u73b0\u573a\u5151\u6362\u7269\u6599"],
    requirements: "\u4f53\u9a8c\u533a\u53ef\u80fd\u6392\u961f\uff0c\u5148\u5904\u7406\u65e0\u9700\u6392\u961f\u9879\u76ee\u3002",
    note: "\u5b98\u65b9\u540d\u5355\u5df2\u6838\u9a8c\u3002",
  },
  {
    venue: "E6", code: "E6-E003", name: "\u50b2\u98ce", type: "\u7535\u7ade\u5bb6\u5177",
    tags: ["\u786c\u4ef6", "\u684c\u642d"], priority: true,
    intro: "\u9002\u5408\u786c\u4ef6\u7528\u6237\u987a\u8def\u770b\u7535\u7ade\u6905\u548c\u684c\u9762\u8bbe\u5907\u3002",
    egg: "\u4e92\u52a8\u3001\u62cd\u7167\u6216\u62bd\u5956\u6d3b\u52a8\u4ee5\u73b0\u573a\u516c\u544a\u4e3a\u51c6\u3002",
    steps: ["\u5230 E6-E003 \u67e5\u770b\u5f53\u65e5\u4e92\u52a8", "\u5b8c\u6210\u4f53\u9a8c\u6216\u62cd\u7167\u4efb\u52a1", "\u5411\u5de5\u4f5c\u4eba\u5458\u786e\u8ba4\u9886\u53d6/\u62bd\u5956\u6761\u4ef6"],
    requirements: "\u6682\u65e0\u7a33\u5b9a\u7684\u5177\u4f53\u65e0\u6599\u6e05\u5355\u3002",
    note: "\u5b98\u65b9\u540d\u5355\u5df2\u6838\u9a8c\u3002",
  },
  {
    venue: "E6", code: "E6-E096", name: "HiBy", type: "\u97f3\u9891 / \u786c\u4ef6",
    tags: ["\u521d\u97f3", "\u5427\u5527", "\u7acb\u724c"], hasEgg: true, priority: true,
    intro: "\u4e8c\u6b21\u5143\u548c\u786c\u4ef6\u4ea4\u53c9\u76ee\u6807\uff0c\u6d41\u7a0b\u6e05\u6670\uff0c\u5efa\u8bae\u4f18\u5148\u5904\u7406\u3002",
    egg: "\u62cd\u521d\u97f3 M500\uff0c\u5e26 #HiByChinaJoy2026 \u53d1\u5e16\uff0c\u53ef\u6362\u5427\u5527\u548c\u7acb\u724c\u3002",
    steps: ["\u5230 E6-E096 \u627e\u5230\u521d\u97f3 M500 \u5c55\u793a\u70b9", "\u62cd\u7167\u5e76\u53d1\u5e03\u5e26 #HiByChinaJoy2026 \u7684\u5e16\u5b50", "\u5411\u5de5\u4f5c\u4eba\u5458\u51fa\u793a\u5e16\u5b50\uff0c\u5151\u6362\u5427\u5527\u548c\u7acb\u724c"],
    requirements: "\u5148\u786e\u8ba4\u5e73\u53f0\u3001\u5e16\u5b50\u53ef\u89c1\u6027\u548c\u6bcf\u65e5\u5151\u6362\u5e93\u5b58\u3002",
    note: "\u6765\u81ea\u7528\u6237\u7ecf\u9a8c\u8d34\uff1b\u8bdd\u9898\u548c\u7269\u6599\u4ee5\u73b0\u573a\u6838\u9a8c\u4e3a\u51c6\u3002",
  },
  {
    venue: "E6", code: "E6-E101", name: "VGN", type: "\u952e\u9f20 / \u786c\u4ef6",
    tags: ["\u952e\u9f20", "\u786c\u4ef6"], priority: true,
    intro: "\u952e\u9f20\u786c\u4ef6\u91cd\u70b9\u5c55\u4f4d\uff0c\u9002\u5408\u5feb\u901f\u8bd5\u7528\u548c\u6bd4\u8f83\u3002",
    egg: "\u4e92\u52a8\u62bd\u5956\u6216\u4f53\u9a8c\u793c\u54c1\u4ee5\u73b0\u573a\u89c4\u5219\u4e3a\u51c6\u3002",
    steps: ["\u5230 E6-E101 \u5148\u786e\u8ba4\u662f\u5426\u6709\u7b7e\u5230\u793c", "\u5b8c\u6210\u4ea7\u54c1\u4f53\u9a8c\u6216\u4e92\u52a8", "\u6309\u89c4\u5219\u9886\u53d6\u6216\u53c2\u4e0e\u62bd\u5956"],
    requirements: "\u6682\u65e0\u7a33\u5b9a\u7684\u5177\u4f53\u65e0\u6599\u6e05\u5355\u3002",
    note: "\u5b98\u65b9\u540d\u5355\u5df2\u6838\u9a8c\u3002",
  },
  {
    venue: "E6", code: "E6-E201", name: "OneXPlayer", type: "\u638c\u673a / \u786c\u4ef6",
    tags: ["\u638c\u673a", "\u6311\u6218\u8d5b", "\u9ad8\u4ef7\u503c"], hasEgg: true, priority: true,
    intro: "\u786c\u4ef6\u9ad8\u4ef7\u503c\u76ee\u6807\uff0c\u6311\u6218\u8d5b\u5956\u54c1\u95e8\u69db\u9ad8\u4f46\u503c\u5f97\u5173\u6ce8\u3002",
    egg: "\u9ed1\u795e\u8bdd\u6311\u6218\u8d5b\uff0cTOP10 \u6709 DJI Air 3S\u3002",
    steps: ["\u5230 E6-E201 \u8be2\u95ee\u6311\u6218\u8d5b\u62a5\u540d\u548c\u573a\u6b21", "\u5b8c\u6210\u9ed1\u795e\u8bdd\u6311\u6218\u5e76\u786e\u8ba4\u6210\u7ee9", "\u82e5\u8fdb\u5165 TOP10\uff0c\u6309\u5de5\u4f5c\u4eba\u5458\u6d41\u7a0b\u767b\u8bb0\u9886\u5956"],
    requirements: "TOP10 \u5c5e\u4e8e\u9ad8\u96be\u5ea6\u7ade\u4e89\u5956\u52b1\uff0c\u4e0d\u5e94\u5f53\u4f5c\u7a33\u5b9a\u5230\u624b\u7269\u6599\u3002",
    note: "\u6765\u81ea\u7528\u6237\u5206\u4eab\uff1b\u5956\u54c1\u548c\u6392\u540d\u89c4\u5219\u9700\u73b0\u573a\u786e\u8ba4\u3002",
  },
  {
    venue: "E6", code: "E6-E506", name: "\u7eff\u8054", type: "\u6570\u7801\u914d\u4ef6",
    tags: ["\u786c\u4ef6", "\u53d1\u5e16", "\u62bd\u5956"], hasEgg: true,
    intro: "\u6d41\u7a0b\u504f\u5173\u6ce8\u548c\u53d1\u5e16\uff0c\u9002\u5408\u5728 E6 \u672b\u6bb5\u987a\u8def\u5904\u7406\u3002",
    egg: "\u5173\u6ce8\u3001\u53d1\u5e16\u3001\u4e92\u52a8\u540e\u53c2\u4e0e\u62bd\u5956\u3002",
    steps: ["\u5173\u6ce8\u5b98\u65b9\u8d26\u53f7", "\u5b8c\u6210\u73b0\u573a\u4e92\u52a8\u5e76\u53d1\u5e03\u6307\u5b9a\u5185\u5bb9", "\u51fa\u793a\u5b8c\u6210\u9875\u9762\uff0c\u6309\u89c4\u5219\u53c2\u4e0e\u62bd\u5956"],
    requirements: "\u62bd\u5956\u4e0d\u662f\u56fa\u5b9a\u8d60\u54c1\uff0c\u786e\u8ba4\u6d3b\u52a8\u65f6\u95f4\u548c\u6bcf\u65e5\u6b21\u6570\u3002",
    note: "\u6765\u81ea\u7528\u6237\u7ecf\u9a8c\u8d34\u3002",
  },
  {
    venue: "E6", code: "E6-EDC01", name: "AULUMU", type: "\u684c\u642d / \u6570\u7801\u914d\u4ef6",
    tags: ["\u6253\u5361", "\u8fdb\u7fa4", "\u62bd Apple Watch"], hasEgg: true, priority: true,
    intro: "\u4efb\u52a1\u6b65\u9aa4\u8f83\u591a\uff0c\u5efa\u8bae\u5728\u4eba\u6d41\u4f4e\u7684\u65f6\u6bb5\u4e00\u6b21\u5b8c\u6210\u3002",
    egg: "\u6253\u5361\u3001\u5173\u6ce8\u3001\u8fdb\u7fa4\u3001\u53d1\u5e16\u540e\u62bd Apple Watch\u3002",
    steps: ["\u5b8c\u6210\u73b0\u573a\u6253\u5361", "\u5173\u6ce8\u8d26\u53f7\u5e76\u52a0\u5165\u6307\u5b9a\u7fa4", "\u53d1\u5e03\u6307\u5b9a\u5185\u5bb9\uff0c\u51fa\u793a\u51ed\u8bc1\u53c2\u4e0e\u62bd\u5956"],
    requirements: "Apple Watch \u5c5e\u4e8e\u62bd\u5956\u7ed3\u679c\uff0c\u4e0d\u662f\u5b8c\u6210\u4efb\u52a1\u5fc5\u5f97\u3002",
    note: "\u6765\u81ea\u7528\u6237\u7ecf\u9a8c\u8d34\u3002",
  },
  {
    venue: "E7", code: "E7-S201", name: "\u8fc8\u4ece", type: "\u952e\u9f20 / \u786c\u4ef6",
    tags: ["\u786c\u4ef6", "\u952e\u9f20"], priority: true,
    intro: "E7 \u786c\u4ef6\u533a\u53ef\u5feb\u901f\u4f53\u9a8c\u7684\u952e\u9f20\u54c1\u724c\u3002",
    egg: "\u4e92\u52a8\u3001\u8bd5\u73a9\u6216\u62bd\u5956\u4ee5\u73b0\u573a\u516c\u544a\u4e3a\u51c6\u3002",
    steps: ["\u786e\u8ba4\u5f53\u65e5\u6d3b\u52a8", "\u5b8c\u6210\u4f53\u9a8c\u6216\u4e92\u52a8", "\u8be2\u95ee\u9886\u53d6\u6216\u62bd\u5956\u6761\u4ef6"],
    requirements: "\u6682\u65e0\u7a33\u5b9a\u7684\u5177\u4f53\u65e0\u6599\u6e05\u5355\u3002",
    note: "\u5b98\u65b9\u540d\u5355\u5df2\u6838\u9a8c\u3002",
  },
  {
    venue: "E7", code: "E7-S602", name: "\u524d\u884c\u8005", type: "\u952e\u9f20 / \u786c\u4ef6",
    tags: ["\u5173\u6ce8", "\u6253\u5361", "\u522e\u522e\u4e50"], hasEgg: true, priority: true,
    intro: "\u6d41\u7a0b\u77ed\uff0c\u9002\u5408\u4f5c\u4e3a E7 \u7684\u4f4e\u6210\u672c\u6536\u5c3e\u70b9\u3002",
    egg: "\u5173\u6ce8\u3001\u6253\u5361\u540e\u53c2\u4e0e\u522e\u522e\u4e50\u3002",
    steps: ["\u5173\u6ce8\u524d\u884c\u8005\u5b98\u65b9\u8d26\u53f7", "\u5b8c\u6210\u5c55\u4f4d\u6253\u5361", "\u51ed\u5b8c\u6210\u9875\u9762\u53c2\u4e0e\u522e\u522e\u4e50"],
    requirements: "\u5956\u54c1\u968f\u673a\uff0c\u5148\u786e\u8ba4\u522e\u522e\u4e50\u6bcf\u65e5\u5e93\u5b58\u3002",
    note: "\u6765\u81ea\u7528\u6237\u7ecf\u9a8c\u8d34\u3002",
  },
  {
    venue: "E7", code: "E7-S603-1", name: "\u9ed1\u9ca8", type: "\u7535\u7ade\u786c\u4ef6",
    tags: ["\u786c\u4ef6", "\u7535\u7ade"], priority: true,
    intro: "E7 \u7535\u7ade\u786c\u4ef6\u91cd\u70b9\uff0c\u5efa\u8bae\u907f\u5f00\u4eba\u6d41\u5cf0\u503c\u3002",
    egg: "\u4f53\u9a8c\u3001\u6311\u6218\u6216\u62cd\u7167\u793c\u54c1\u4ee5\u73b0\u573a\u89c4\u5219\u4e3a\u51c6\u3002",
    steps: ["\u786e\u8ba4\u662f\u5426\u9700\u8981\u6392\u961f\u6216\u9884\u7ea6", "\u5b8c\u6210\u6307\u5b9a\u4f53\u9a8c/\u6311\u6218", "\u6309\u89c4\u5219\u9886\u53d6\u793c\u54c1"],
    requirements: "\u6682\u65e0\u7a33\u5b9a\u7684\u5177\u4f53\u65e0\u6599\u6e05\u5355\u3002",
    note: "\u5b98\u65b9\u540d\u5355\u5df2\u6838\u9a8c\u3002",
  },
  {
    venue: "E7", code: "E7-S802", name: "\u8fbe\u5c14\u4f18", type: "\u952e\u9f20 / \u786c\u4ef6",
    tags: ["\u786c\u4ef6", "\u952e\u9f20"], priority: true,
    intro: "\u4e0e\u8fc8\u4ece\u3001\u524d\u884c\u8005\u540c\u533a\uff0c\u53ef\u8fde\u7eed\u6d4f\u89c8\u3002",
    egg: "\u4e92\u52a8\u3001\u4f53\u9a8c\u548c\u62bd\u5956\u4ee5\u73b0\u573a\u89c4\u5219\u4e3a\u51c6\u3002",
    steps: ["\u67e5\u770b\u5f53\u65e5\u4e92\u52a8\u724c", "\u5b8c\u6210\u4f53\u9a8c\u6216\u6253\u5361", "\u786e\u8ba4\u5151\u6362/\u62bd\u5956\u65f6\u95f4"],
    requirements: "\u6682\u65e0\u7a33\u5b9a\u7684\u5177\u4f53\u65e0\u6599\u6e05\u5355\u3002",
    note: "\u5b98\u65b9\u540d\u5355\u5df2\u6838\u9a8c\u3002",
  },
  {
    venue: "E7", code: "E7-S807", name: "\u677e\u80fd X", type: "\u7535\u7ade\u5bb6\u5177",
    tags: ["\u56db\u54c1\u724c\u96c6\u7ae0", "\u7535\u7ade\u6905", "3D \u6253\u5370\u673a"], hasEgg: true, priority: true,
    intro: "\u96c6\u7ae0\u622a\u6b62\u65f6\u95f4\u65e9\uff0c\u5fc5\u987b\u5728\u4e0a\u5348\u6216\u4e2d\u5348\u524d\u5904\u7406\u3002",
    egg: "\u56db\u54c1\u724c\u96c6\u7ae0\uff0c13:00 \u622a\u6b62\uff0c\u53ef\u62bd\u7535\u7ade\u6905\u30013D \u6253\u5370\u673a\u3001\u652f\u67b6\u3002",
    steps: ["\u5230 E7-S807 \u9886\u53d6\u56db\u54c1\u724c\u96c6\u7ae0\u89c4\u5219", "\u5728 13:00 \u524d\u5b8c\u6210\u56db\u54c1\u724c\u96c6\u7ae0", "\u6309\u89c4\u5219\u53c2\u4e0e\u62bd\u5956\u6216\u5151\u6362\u652f\u67b6"],
    requirements: "13:00 \u662f\u5173\u952e\u622a\u6b62\u70b9\uff1b\u5927\u578b\u5956\u54c1\u5c5e\u4e8e\u62bd\u5956\uff0c\u4e0d\u662f\u5fc5\u5f97\u3002",
    note: "\u6765\u81ea\u7528\u6237\u7ecf\u9a8c\u8d34\uff0c\u73b0\u573a\u53ef\u80fd\u8c03\u6574\u622a\u6b62\u65f6\u95f4\u3002",
  },
];

const routeStops = [
  { time: "09:00", venue: "E6", code: "E6-E096", title: "\u5148\u62ff HiBy \u4e8c\u6b21\u5143\u786c\u4ef6\u7269\u6599", text: "\u5f00\u573a\u5148\u5904\u7406\u62cd\u7167\u53d1\u5e16\u5151\u6362\uff0c\u907f\u514d\u4e0b\u5348\u6392\u961f\u3002" },
  { time: "09:40", venue: "N1", code: "N1-G001", title: "PlayStation / GSE", text: "\u5148\u786e\u8ba4 PlayStation \u6d3b\u52a8\uff0c\u518d\u987a\u8def\u9886\u53d6 GSE \u5c0f\u518c\u5b50\u548c\u96c6\u7ae0\u672c\u3002" },
  { time: "11:00", venue: "N2", code: "N2-G201", title: "\u4ee3\u53f7\uff1a\u9999\u6574\u7406\u5238", text: "\u4f18\u5148\u95ee\u6574\u7406\u5238\u548c\u9884\u7ea6\u5361\uff0c\u53d1\u5b8c\u5c31\u8df3\u8fc7\u957f\u961f\u3002" },
  { time: "11:40", venue: "N2", code: "N2-11-2", title: "\u597d\u6e38\u5feb\u7206 / Bilibili", text: "\u5148\u505a\u77ed\u6d41\u7a0b\u8bd5\u73a9\u548c\u96c6\u7ae0\uff0c\u70ed\u95e8\u4e92\u52a8\u7559\u5230\u961f\u5217\u8f83\u77ed\u65f6\u3002" },
  { time: "13:30", venue: "N3", code: "N3-01", title: "\u534e\u4e3a\u9e3f\u8499\u4efb\u52a1", text: "\u5348\u540e\u5904\u7406\u56fe\u9274\u4efb\u52a1\uff0c\u5148\u6838\u9a8c\u79fb\u52a8\u7535\u6e90\u5e93\u5b58\u548c\u5151\u6362\u89c4\u5219\u3002" },
  { time: "14:20", venue: "N3", code: "N3-10", title: "\u5ce1\u8c37\u4e89\u950b\u96c6\u7ae0", text: "\u6709\u65f6\u95f4\u518d\u5b8c\u6210\u6574\u5957\u96c6\u7ae0\uff0c\u907f\u514d\u4e3a\u4e86\u5355\u4e2a\u7269\u6599\u53cd\u590d\u6298\u8fd4\u3002" },
  { time: "15:30", venue: "E6", code: "E6-E201", title: "\u638c\u673a\u548c\u786c\u4ef6\u4f53\u9a8c", text: "\u9519\u5f00\u5f00\u573a\u5cf0\u503c\uff0c\u67e5\u770b OneXPlayer\u3001Sony INZONE\u3001VGN\u3002" },
  { time: "16:20", venue: "E7", code: "E7-S807", title: "E7 \u96c6\u7ae0\u6536\u5c3e", text: "\u677e\u80fd X \u96c6\u7ae0\u9700\u7559\u610f 13:00 \u622a\u6b62\uff0c\u665a\u5230\u53ea\u770b\u5176\u4ed6\u5c55\u4f4d\u3002" },
];

const hotspotPositions = {
  overview: [
    // Coordinates are relative to the source image, not the letterboxed map frame.
    ["N1", 36.2, 31.5], ["N2", 45.4, 31.5], ["N3", 54.6, 31.5], ["N4", 63.5, 31.5], ["N5", 71.8, 31.5],
    ["E3", 54.7, 64.5], ["E4", 61.8, 58.5], ["E5", 67.5, 53.3], ["E6", 74.0, 47.0], ["E7", 81.5, 42.0],
  ],
};

// Source-map coordinates. Fixed blocks are placed on their printed vendor panel;
// grouped side booths are handled by the venue-specific fallback rules below.
const boothPointAnchors = {
  N2: {
    "N2-01": [61, 88], "N2-02": [61, 76], "N2-03": [61, 61], "N2-04": [61, 49], "N2-05": [27, 71],
    "N2-06": [27, 79], "N2-07": [27, 58], "N2-08": [27, 45], "N2-09": [27, 22], "N2-11-1": [61, 43],
    "N2-11-2": [61, 46], "N2-12": [61, 32], "N2-13": [75, 44], "N2-14": [76, 32], "N2-15": [27, 68],
    "N2-G101": [54, 9], "N2-G105": [60, 9], "N2-G106": [64, 9], "N2-G108": [69, 9], "N2-G201": [89, 18], "N2-G207": [89, 22],
  },
  N3: {
    "N3-01": [36, 81], "N3-02": [36, 63], "N3-03": [36, 46], "N3-05": [36, 28], "N3-06": [73, 81],
    "N3-07": [73, 63], "N3-08": [73, 46], "N3-09": [73, 20], "N3-10": [39, 17], "N3-11": [24, 17],
  },
  N4: {
    "N4-01": [67, 82], "N4-02": [32, 82], "N4-03": [32, 45], "N4-05": [67, 52], "N4-07": [67, 20],
  },
  N5: {
    "N5-01": [33, 80], "N5-02": [33, 60], "N5-03": [33, 42], "N5-04": [33, 28], "N5-05": [33, 16],
    "N5-06": [72, 80], "N5-07": [72, 60], "N5-08": [72, 42], "N5-09": [72, 22],
  },
  E3: {
    "E3-CA101": [43, 19], "E3-CA102": [43, 29], "E3-CA104": [27, 19], "E3-CA105": [27, 29],
    "E3-CA201": [42, 39], "E3-CA202": [42, 48], "E3-CA203": [42, 55], "E3-CA204": [32, 48], "E3-CA205": [32, 39],
    "E3-CA206": [23, 39], "E3-CA207": [23, 45], "E3-CA208": [23, 53], "E3-CA209": [32, 55],
    "E3-CA302": [43, 66], "E3-CA303": [43, 74], "E3-CA304": [32, 66], "E3-CA305": [23, 61], "E3-CA306": [23, 66],
    "E3-CA307": [32, 74], "E3-CA308": [23, 74], "E3-CH101": [65, 20], "E3-CH201": [59, 40], "E3-CH203": [59, 52],
    "E3-CH204": [73, 40], "E3-CH206": [73, 52], "E3-CH601": [59, 10],
  },
  E4: {
    "E4-M001": [60, 21], "E4-M002": [60, 34], "E4-M003": [80, 20], "E4-M005": [80, 28], "E4-M006": [80, 37],
    "E4-M007": [80, 42], "E4-M008": [69, 34], "E4-M090": [90, 22], "E4-M096": [90, 27], "E4-M201-2": [68, 12],
    "E4-M202": [32, 12], "E4-M290": [80, 27], "E4-M296": [80, 27], "E4-M301": [40, 21], "E4-M302": [40, 38],
    "E4-M302-1": [40, 38], "E4-M303": [40, 29], "E4-M305": [27, 38], "E4-M306": [22, 21], "E4-M307": [22, 29],
    "E4-M308": [22, 35],
  },
  E5: {
    "E5-FM101": [58, 19], "E5-FM102": [58, 29], "E5-FM103": [78, 19], "E5-FM104": [78, 29], "E5-FM201": [40, 19],
    "E5-FM202-1": [22, 19], "E5-FM202-2": [22, 24], "E5-FM203": [40, 36], "E5-FM204": [22, 29], "E5-FM205": [40, 27],
    "E5-FM205-1": [40, 27], "E5-FM205-2": [40, 27], "E5-FM205-3": [40, 27], "E5-FM205-4": [40, 27], "E5-FM205-5": [40, 27],
    "E5-FM205-6": [40, 27], "E5-FM206": [22, 35], "E5-FM301-1": [58, 45], "E5-FM301-2": [62, 45], "E5-FM302-2": [58, 59],
    "E5-FM304": [78, 45], "E5-FM305": [78, 51], "E5-FM305-1": [78, 51], "E5-FM305-2": [78, 51], "E5-FM305-3": [78, 51],
    "E5-FM305-4": [78, 51], "E5-FM306": [78, 60], "E5-FM401": [40, 45], "E5-FM402": [40, 54], "E5-FM403": [40, 62],
    "E5-FM404": [22, 45], "E5-FM405": [22, 52], "E5-FM406": [22, 61], "E5-FM501": [58, 70], "E5-FM503": [70, 70],
    "E5-FM504": [70, 78], "E5-FM505": [70, 85], "E5-FM506": [80, 70], "E5-FM507": [80, 78], "E5-FM603": [44, 80],
    "E5-FM604": [32, 70], "E5-FM605": [32, 78], "E5-FM606": [32, 85], "E5-FM607": [22, 70], "E5-FM609": [22, 85],
    "E5-FM804": [58, 54], "E5-FM805": [63, 54], "E5-FM808": [58, 78], "E5-FM809": [58, 85],
  },
  E6: {
    "E6-E001": [62, 18], "E6-E002": [62, 34], "E6-E003": [77, 18], "E6-E005": [77, 29], "E6-E101": [35, 18],
    "E6-E103": [20, 18], "E6-E105": [20, 25], "E6-E201": [62, 43], "E6-E202": [62, 51], "E6-E203": [62, 59],
    "E6-E206": [77, 43], "E6-E207": [77, 59], "E6-E301": [35, 43], "E6-E302": [35, 51], "E6-E303": [35, 59],
    "E6-E305": [20, 43], "E6-E306": [20, 51], "E6-E307": [20, 55], "E6-E308": [20, 59], "E6-E501": [35, 29],
    "E6-E502": [35, 69], "E6-E503": [20, 69], "E6-E506": [20, 34], "E6-E507": [20, 29], "E6-EDC01": [35, 76],
    "E6-EDC11": [20, 84], "E6-ST001": [62, 69], "E6-ST002": [62, 82], "E6-ST003": [62, 89], "E6-ST005": [77, 69],
    "E6-ST006": [77, 75], "E6-ST601": [77, 66], "E6-ST602": [77, 68], "E6-ST603": [77, 73], "E6-ST701": [77, 66],
  },
  E7: {
    "E7-S001": [60, 18], "E7-S002": [60, 29], "E7-S003-1": [78, 18], "E7-S005": [78, 29], "E7-S101-1": [32, 18],
    "E7-S101-2": [32, 18], "E7-S201": [60, 43], "E7-S202": [78, 43], "E7-S203": [78, 51], "E7-S205": [78, 59],
    "E7-S301": [35, 51], "E7-S302": [35, 43], "E7-S303": [20, 43], "E7-S305": [20, 51], "E7-S501": [60, 68],
    "E7-S502": [78, 68], "E7-S503": [78, 78], "E7-S505": [78, 73], "E7-S601": [35, 68], "E7-S602": [35, 78],
    "E7-S603-1": [20, 64], "E7-S603-2": [20, 68], "E7-S605": [20, 78], "E7-S701-1": [60, 88], "E7-S701-2": [60, 88],
    "E7-S702": [60, 95], "E7-S705": [78, 88], "E7-S706": [78, 94], "E7-S707": [78, 95], "E7-S708": [78, 99],
    "E7-S801": [35, 88], "E7-S802": [35, 95], "E7-S805": [20, 88], "E7-S806": [20, 94], "E7-S807": [20, 99],
    "E7-S808": [20, 96], "E7-S893": [10, 97],
  },
};

const state = {
  currentVenue: "overview",
  selectedBooth: null,
  query: "",
  favoritesOnly: false,
  favorites: new Set(loadFavorites()),
  official: [],
  officialLoaded: false,
  referenceBooths: [],
  referenceLoaded: false,
  referenceVendorById: new Map(),
  routeOpen: false,
  showAllBooths: true,
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function cleanCode(code = "") {
  return String(code).replaceAll(/\s+/g, "").toUpperCase();
}

function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem("cj2026-favorites") || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveFavorites() {
  try {
    localStorage.setItem("cj2026-favorites", JSON.stringify([...state.favorites]));
  } catch {
    // Local storage may be unavailable in private file previews.
  }
}

function byCode(code) {
  const target = cleanCode(code);
  return spotlight.find((vendor) => cleanCode(vendor.code) === target)
    || state.official.find((vendor) => cleanCode(vendor.code) === target)
    || null;
}

function officialToVendor(item) {
  const code = item.code || "";
  const venueMatch = code.replaceAll(/\s+/g, "").match(/^(N[1-5]|E[3-7])/i);
  const venue = venueMatch ? venueMatch[1].toUpperCase() : item.area || code.slice(0, 1) || "";
  const name = item.name_zh || item.name_en || "\u672a\u547d\u540d\u5c55\u5546";
  const intro = (item.introduction_zh || item.introduction_en || "\u5b98\u65b9\u5c55\u5546\u4fe1\u606f").replace(/\s+/g, " ").trim();
  return {
    venue,
    code: item.code || `${venue}-\u5b98\u65b9\u5c55\u4f4d`,
    name,
    type: inferType(`${name} ${intro}`),
    tags: ["\u5b98\u65b9\u540d\u5355"],
    intro: intro.slice(0, 120),
    egg: "\u6682\u65e0\u5df2\u6838\u9a8c\u7684\u5177\u4f53\u65e0\u6599\u8bb0\u5f55\u3002",
    steps: ["\u5230\u8fbe\u5b98\u65b9\u5c55\u4f4d", "\u67e5\u770b\u5f53\u65e5\u6d3b\u52a8\u724c\u548c\u4e92\u52a8\u89c4\u5219", "\u6309\u73b0\u573a\u89c4\u5219\u786e\u8ba4\u662f\u5426\u6709\u9886\u53d6\u7269\u6599"],
    requirements: "\u7269\u6599\u548c\u6d3b\u52a8\u4ee5\u73b0\u573a\u516c\u544a\u4e3a\u51c6\u3002",
    note: "\u6765\u81ea CJ \u5b98\u65b9\u5c55\u5546\u540d\u5355\uff1b\u9875\u9762\u672a\u628a\u672a\u7ecf\u6838\u9a8c\u7684\u8d60\u54c1\u5199\u6210\u56fa\u5b9a\u5956\u52b1\u3002",
    official: true,
  };
}

function inferType(text) {
  if (/\u952e\u9f20|\u663e\u793a\u5668|\u786c\u4ef6|\u638c\u673a|\u7535\u7ade\u6905|\u624b\u673a|\u6570\u7801|\u97f3\u9891|\u684c\u642d/.test(text)) return "\u786c\u4ef6";
  if (/\u6444\u5f71|\u76f8\u673a|\u5f71\u50cf|Polaroid/.test(text)) return "\u6444\u5f71";
  if (/\u6f6e\u73a9|\u6a21\u73a9|\u52a8\u6f2b|\u4e8c\u6b21\u5143|IP|\u89d2\u8272/.test(text)) return "\u4e8c\u6b21\u5143 / \u6f6e\u73a9";
  if (/\u5a92\u4f53|\u5e73\u53f0|\u53d1\u884c/.test(text)) return "\u6e38\u620f\u5a92\u4f53";
  return "\u6e38\u620f";
}

function getVendorData(code) {
  return byCode(code) || null;
}

function allVendors() {
  const known = new Map();
  [...spotlight, ...state.official].forEach((vendor) => {
    const key = cleanCode(vendor.code);
    if (!known.has(key)) known.set(key, vendor);
  });
  return [...known.values()];
}

function getVenueVendors(venueKey) {
  const spotlightItems = spotlight.filter((vendor) => venueKey === "overview" || vendor.venue === venueKey);
  const officialItems = state.official.filter((vendor) => venueKey === "overview" || vendor.venue === venueKey);
  const known = new Map();
  [...spotlightItems, ...officialItems].forEach((vendor) => {
    const key = cleanCode(vendor.code);
    if (!known.has(key)) known.set(key, vendor);
  });
  return [...known.values()];
}

function normalizeText(value = "") {
  return String(value).toLowerCase().replace(/[\s\u00b7\u30fb,\uff0c.\u3002/\\()\uff08\uff09+&\uff1a:\u300c\u300d\u300a\u300b]/g, "");
}

const referenceAliases = {
  "n1-aigo": "N1-G202",
  "n1-gse": "N1-G205",
  "n1-playstation": "N1-G001",
  "n2-\u4ee3\u53f7\u9999": "N2-G201",
  "n3-\u534e\u4e3a\u6e38\u620f\u4e2d\u5fc3": "N3-01",
  "n3-\u66b4\u96ea\u6e38\u620f": "N3-03",
  "e5-\u6dd8\u5929\u6f6e\u73a9": "E5-FM102",
  "e6-\u7ef4\u4fe1\u8bfa": "E6-E001",
  "e6-\u7d22\u5c3cinzone": "E6-E002",
  "e6-\u50b2\u98ce": "E6-E003",
  "e6-hiby": "E6-E096",
  "e6-vgn": "E6-E101",
  "e6-onexplayer": "E6-E201",
  "e6-\u7eff\u8054": "E6-E506",
  "e6-aulumu": "E6-EDC01",
  "e7-\u8fc8\u4ece": "E7-S201",
  "e7-\u524d\u884c\u8005": "E7-S602",
  "e7-\u9ed1\u9ca8": "E7-S603-1",
  "e7-\u8fbe\u5c14\u4f18": "E7-S802",
  "e7-\u677e\u80fdx": "E7-S807",
};

function getReferenceVendor(reference) {
  const aliasCode = referenceAliases[normalizeText(reference.id)] || referenceAliases[normalizeText(reference.name)];
  const aliasVendor = aliasCode ? byCode(aliasCode) : null;
  const referenceName = normalizeText(reference.name);
  const candidates = [...spotlight, ...state.official];
  const matched = aliasVendor || candidates.find((vendor) => {
    const vendorName = normalizeText(vendor.name);
    return vendorName.length > 2 && (referenceName.includes(vendorName) || vendorName.includes(referenceName));
  });

  const vendor = matched || {
    venue: reference.hall,
    code: reference.id,
    name: reference.name,
    type: inferType(reference.name),
    tags: ["\u5730\u56fe\u5382\u5546"],
    intro: `${reference.name}\uff0c\u4f4d\u7f6e\u6765\u81ea\u901b\u5c55\u795e\u5668\u5730\u56fe\u3002`,
    egg: "\u6682\u65e0\u5df2\u6838\u9a8c\u7684\u5177\u4f53\u65e0\u6599\u8bb0\u5f55\u3002",
    steps: ["\u5230\u8fbe\u5730\u56fe\u5706\u70b9\u4f4d\u7f6e", "\u67e5\u770b\u5c55\u4f4d\u6d3b\u52a8\u724c", "\u6309\u73b0\u573a\u89c4\u5219\u786e\u8ba4\u662f\u5426\u6709\u7269\u6599"],
    requirements: "\u7269\u6599\u548c\u6d3b\u52a8\u4ee5\u73b0\u573a\u516c\u544a\u4e3a\u51c6\u3002",
    note: "\u5382\u5546\u540d\u79f0\u548c\u4f4d\u7f6e\u6765\u81ea\u901b\u5c55\u795e\u5668\u5730\u56fe\uff1b\u8be6\u60c5\u672a\u4e0e\u5b98\u65b9\u5c55\u5546\u540d\u5355\u5b8c\u5168\u5339\u914d\u3002",
    referenceOnly: true,
  };

  return {
    ...vendor,
    venue: reference.hall,
    mapX: reference.x,
    mapY: reference.y,
    referenceId: reference.id,
    referenceName: reference.name,
  };
}

function getReferenceMapVendors(venueKey) {
  const references = state.referenceBooths.filter((reference) => reference.hall === venueKey);
  const vendors = references.map(getReferenceVendor);
  state.referenceVendorById = new Map(vendors.map((vendor) => [vendor.referenceId, vendor]));
  return vendors;
}

function getMapVendors(venueKey) {
  if (state.referenceLoaded && venueKey !== "overview") return getReferenceMapVendors(venueKey);
  return getVenueVendors(venueKey).sort((a, b) => cleanCode(a.code).localeCompare(cleanCode(b.code), "en"));
}

function makeBoothSpots(venueKey, vendors) {
  return vendors.map((vendor) => {
    const fallback = boothPointAnchors[venueKey]?.[cleanCode(vendor.code)] || [50, 50];
    return {
      vendor,
      left: vendor.mapX ?? fallback[0],
      top: vendor.mapY ?? fallback[1],
      label: "",
      referenceId: vendor.referenceId || "",
      isBooth: true,
    };
  });
}

function getFilteredVendors() {
  let list = state.query ? allVendors() : getVenueVendors(state.currentVenue);
  const query = state.query.trim().toLowerCase();
  if (query) {
    list = list.filter((vendor) => [vendor.name, vendor.code, vendor.type, vendor.intro, vendor.egg, ...(vendor.tags || [])]
      .join(" ").toLowerCase().includes(query));
  }
  if (state.favoritesOnly) list = list.filter((vendor) => state.favorites.has(cleanCode(vendor.code)));
  return list.sort((a, b) => {
    const aRank = (a.priority ? 2 : 0) + (a.hasEgg ? 1 : 0);
    const bRank = (b.priority ? 2 : 0) + (b.hasEgg ? 1 : 0);
    return bRank - aRank || String(a.name).localeCompare(String(b.name), "zh-CN");
  });
}

function getVenueCount(venueKey) {
  if (venueKey === "overview") return allVendors().length;
  return state.official.filter((vendor) => vendor.venue === venueKey).length || spotlight.filter((vendor) => vendor.venue === venueKey).length;
}

function renderVenueNav() {
  $("#venueNav").innerHTML = Object.entries(venues).map(([key, venue]) => `
    <button type="button" data-venue="${key}" class="${state.currentVenue === key ? "is-active" : ""}" aria-current="${state.currentVenue === key ? "page" : "false"}">
      <span class="nav-label">${escapeHtml(venue.label)}</span>
      <span class="nav-count">${getVenueCount(key)}</span>
    </button>
  `).join("");
}

function renderHeading() {
  const venue = venues[state.currentVenue];
  $("#venueKicker").textContent = `${venue.area} / \u666e\u901a\u89c2\u4f17\u53ef\u8fbe`;
  $("#venueTitle").textContent = venue.label;
  $("#venueDescription").textContent = venue.description;
  $("#mapTitle").textContent = state.currentVenue === "overview" ? "\u5168\u90e8\u573a\u9986" : venue.label;
  $("#headingMeta").innerHTML = `
    <span class="meta-tag"><strong>${getVenueCount(state.currentVenue)}</strong> \u5b98\u65b9\u8bb0\u5f55</span>
    <span class="meta-tag"><strong>${spotlight.filter((vendor) => state.currentVenue === "overview" || vendor.venue === state.currentVenue).length}</strong> \u91cd\u70b9\u5c55\u4f4d</span>
    <span class="meta-tag"><strong>${spotlight.filter((vendor) => (state.currentVenue === "overview" || vendor.venue === state.currentVenue) && vendor.hasEgg).length}</strong> \u65e0\u6599\u8bb0\u5f55</span>
  `;
}

function renderMetrics() {
  const venueVendors = getVenueVendors(state.currentVenue);
  const known = venueVendors.filter((vendor) => !vendor.official || vendor.hasEgg);
  const priority = venueVendors.filter((vendor) => vendor.priority).length;
  const estimate = state.currentVenue === "overview" ? "5\u20147" : `${Math.max(1, Math.ceil(venueVendors.length / 8))}\u2014${Math.max(2, Math.ceil(venueVendors.length / 5))}`;
  $("#metricRow").innerHTML = [
    ["\u5b98\u65b9\u5c55\u4f4d", venueVendors.length, "\u4e2a"],
    ["\u6709\u7269\u6599\u8bb0\u5f55", known.filter((vendor) => vendor.hasEgg).length, "\u4e2a"],
    ["\u504f\u597d\u4f18\u5148", priority, "\u4e2a"],
    ["\u5efa\u8bae\u505c\u7559", estimate, "\u5c0f\u65f6"],
  ].map(([label, value, unit]) => `<div class="metric"><span class="metric-label">${label}</span><div class="metric-value">${value}<small>${unit}</small></div></div>`).join("");
}

function renderMap() {
  const venue = venues[state.currentVenue];
  const image = $("#mapImage");
  image.classList.add("is-switching");
  window.setTimeout(() => {
    image.src = venue.image;
    image.alt = `ChinaJoy 2026 ${venue.label}\u5730\u56fe`;
    image.classList.remove("is-switching");
    positionHotspots();
  }, 80);

  const spots = state.currentVenue === "overview"
    ? hotspotPositions.overview.map(([venueKey, left, top]) => ({ venue: venueKey, left, top, label: venueKey }))
    : state.showAllBooths
      ? makeBoothSpots(state.currentVenue, getMapVendors(state.currentVenue))
      : makeBoothSpots(
        state.currentVenue,
        getMapVendors(state.currentVenue).filter((vendor) => vendor.priority || vendor.hasEgg),
      );

  const densityToggle = $("#boothDensityToggle");
  if (densityToggle) {
    densityToggle.hidden = state.currentVenue === "overview";
    densityToggle.classList.toggle("is-active", state.showAllBooths);
    densityToggle.setAttribute("aria-pressed", String(state.showAllBooths));
    densityToggle.querySelector("span").textContent = state.showAllBooths ? "\u5168\u90e8\u644a\u4f4d" : "\u91cd\u70b9\u644a\u4f4d";
  }

  $("#mapHotspots").innerHTML = spots.map((spot) => {
    const item = spot.vendor;
    const classes = ["map-hotspot", item?.priority ? "is-priority" : "", item?.hasEgg ? "is-egg" : "", spot.isBooth ? "is-booth" : "", state.currentVenue === "overview" ? "overview-hotspot" : ""].filter(Boolean).join(" ");
    const label = state.currentVenue === "overview" ? spot.label : "";
    const name = item?.name || venues[spot.venue]?.label || label;
    return `<button type="button" class="${classes}" style="left:${spot.left}%;top:${spot.top}%" data-spot-left="${spot.left}" data-spot-top="${spot.top}" data-hotspot-venue="${escapeHtml(spot.venue || state.currentVenue)}" data-hotspot-reference="${escapeHtml(spot.referenceId || "")}" data-hotspot-code="${escapeHtml(item?.code || "")}" title="${escapeHtml(name)}" aria-label="\u67e5\u770b ${escapeHtml(name)}"><span>${escapeHtml(label)}</span></button>`;
  }).join("");
  positionHotspots();
}

function positionHotspots() {
  const frame = $("#mapFrame");
  const image = $("#mapImage");
  if (!frame || !image?.naturalWidth || !image?.naturalHeight) return;

  const frameWidth = frame.clientWidth;
  const frameHeight = frame.clientHeight;
  const scale = Math.min(frameWidth / image.naturalWidth, frameHeight / image.naturalHeight);
  const displayWidth = image.naturalWidth * scale;
  const displayHeight = image.naturalHeight * scale;
  const offsetX = (frameWidth - displayWidth) / 2;
  const offsetY = (frameHeight - displayHeight) / 2;

  $$("#mapHotspots [data-spot-left]").forEach((hotspot) => {
    const left = offsetX + (displayWidth * Number(hotspot.dataset.spotLeft)) / 100;
    const top = offsetY + (displayHeight * Number(hotspot.dataset.spotTop)) / 100;
    hotspot.style.left = `${left}px`;
    hotspot.style.top = `${top}px`;
  });
}

function vendorCard(vendor, index) {
  const code = cleanCode(vendor.code);
  const favorite = state.favorites.has(code);
  const summary = vendor.hasEgg ? vendor.egg : vendor.intro;
  return `
    <article class="vendor-card ${vendor.priority ? "priority" : ""} ${vendor.hasEgg ? "has-egg" : ""} ${state.selectedBooth && cleanCode(state.selectedBooth.code) === code ? "is-selected" : ""}" data-code="${escapeHtml(vendor.code)}" style="--i:${Math.min(index, 12)}" tabindex="0" role="button" aria-label="\u67e5\u770b ${escapeHtml(vendor.name)} \u5c55\u4f4d\u8be6\u60c5">
      <div class="vendor-card-top"><span class="vendor-code">${escapeHtml(vendor.code)}</span><span class="vendor-favorite ${favorite ? "is-favorite" : ""}"><i data-lucide="${favorite ? "heart" : "heart"}"></i></span></div>
      <h4>${escapeHtml(vendor.name)}</h4>
      <p>${escapeHtml(summary)}</p>
      <div class="vendor-card-footer"><span class="vendor-type">${escapeHtml(vendor.type || "\u5b98\u65b9\u5c55\u4f4d")}</span>${vendor.hasEgg ? '<span class="egg-badge"><i data-lucide="gift"></i>\u65e0\u6599</span>' : ""}</div>
    </article>
  `;
}

function renderVendors() {
  const list = getFilteredVendors();
  const max = state.query || state.favoritesOnly ? 80 : state.currentVenue === "overview" ? 60 : 32;
  const visible = list.slice(0, max);
  $("#vendorTitle").textContent = state.favoritesOnly ? "\u6211\u7684\u6536\u85cf" : state.query ? `\u641c\u7d22\u7ed3\u679c\uff1a${state.query}` : state.currentVenue === "overview" ? "\u91cd\u70b9\u5382\u5546" : `${venues[state.currentVenue].label} / \u5c55\u4f4d\u4fe1\u606f`;
  $("#resultCount").textContent = `${visible.length}${visible.length < list.length ? ` / ${list.length}` : ""} \u4e2a\u5c55\u4f4d`;
  $("#clearFilter").hidden = !state.query && !state.favoritesOnly;
  if (!visible.length) {
    $("#vendorGrid").innerHTML = `<div class="empty-grid"><i data-lucide="search-x"></i><strong>\u6ca1\u6709\u5339\u914d\u7684\u5c55\u4f4d</strong><span>\u8bd5\u8bd5\u5382\u5546\u540d\u3001\u5c55\u4f4d\u53f7\u6216\u201c\u65e0\u6599\u201d\u7b49\u5173\u952e\u8bcd\u3002</span></div>`;
  } else {
    $("#vendorGrid").innerHTML = visible.map(vendorCard).join("");
  }
  refreshIcons();
}

function renderInspector(vendor) {
  const content = $("#inspectorContent");
  const empty = $("#inspectorEmpty");
  if (!vendor) {
    empty.hidden = false;
    content.hidden = true;
    return;
  }
  const favorite = state.favorites.has(cleanCode(vendor.code));
  empty.hidden = true;
  content.hidden = false;
  content.innerHTML = `
    <div class="inspector-topline">
      <div><span class="inspector-code">${escapeHtml(vendor.code)}</span><h3 class="inspector-title">${escapeHtml(vendor.name)}</h3></div>
      <button type="button" class="favorite-button ${favorite ? "is-favorite" : ""}" data-favorite-code="${escapeHtml(vendor.code)}" title="${favorite ? "\u53d6\u6d88\u6536\u85cf" : "\u6536\u85cf\u5c55\u4f4d"}" aria-label="${favorite ? "\u53d6\u6d88\u6536\u85cf" : "\u6536\u85cf\u5c55\u4f4d"}"><i data-lucide="heart"></i></button>
    </div>
    <p class="inspector-subtitle">${escapeHtml(vendor.type || "\u5b98\u65b9\u5c55\u4f4d")} \u00b7 ${escapeHtml(venues[vendor.venue]?.label || vendor.venue || "\u666e\u901a\u89c2\u4f17\u53ef\u8fbe")}</p>
    <div class="tag-row">${(vendor.tags || []).map((tag) => `<span class="tag ${tag === "\u4f18\u5148" || vendor.priority && tag === "\u70ed\u95e8" ? "priority" : ""}">${escapeHtml(tag)}</span>`).join("")}${vendor.official ? '<span class="tag">\u5b98\u65b9\u540d\u5355</span>' : ""}</div>
    <div class="detail-block"><span class="detail-label">\u7269\u6599 / \u65e0\u6599</span><p class="detail-text">${escapeHtml(vendor.egg || "\u6682\u65e0\u5df2\u6838\u9a8c\u8bb0\u5f55")}</p></div>
    <div class="detail-block"><span class="detail-label">\u9886\u53d6\u6b65\u9aa4</span><p class="detail-text">${(vendor.steps || []).map((step, index) => `${index + 1}. ${escapeHtml(step)}`).join("<br>")}</p></div>
    <div class="detail-block"><span class="detail-label">\u8981\u6c42\u4e0e\u63d0\u9192</span><p class="detail-text detail-note">${escapeHtml(vendor.requirements || "\u4ee5\u73b0\u573a\u516c\u544a\u4e3a\u51c6")}<br>${escapeHtml(vendor.note || "")}</p></div>
    <div class="inspector-actions"><button type="button" class="action-button" data-add-route="${escapeHtml(vendor.code)}"><i data-lucide="route"></i>${favorite ? "\u5df2\u6536\u85cf\uff0c\u52a0\u5165\u8def\u7ebf" : "\u6536\u85cf\u5e76\u52a0\u5165\u8def\u7ebf"}</button><button type="button" class="action-button secondary" data-open-venue="${escapeHtml(vendor.venue)}"><i data-lucide="map"></i>\u770b\u573a\u9986\u5730\u56fe</button></div>
  `;
  refreshIcons();
}

function renderRoute() {
  const panel = $("#routePanel");
  panel.hidden = !state.routeOpen;
  if (!state.routeOpen) return;
  $("#routeTimeline").innerHTML = routeStops.map((stop, index) => `
    <button type="button" class="route-step" style="--i:${index}" data-route-code="${escapeHtml(stop.code)}" data-route-venue="${escapeHtml(stop.venue)}">
      <span class="route-time">${escapeHtml(stop.time)} \u00b7 ${escapeHtml(stop.venue)}</span><h4>${escapeHtml(stop.title)}</h4><p>${escapeHtml(stop.text)}</p>
    </button>
  `).join("");
}

function updateFavorite(code, showToast = true) {
  const key = cleanCode(code);
  if (state.favorites.has(key)) {
    state.favorites.delete(key);
    if (showToast) showToastMessage("\u5df2\u53d6\u6d88\u6536\u85cf");
  } else {
    state.favorites.add(key);
    if (showToast) showToastMessage("\u5df2\u52a0\u5165\u6536\u85cf");
  }
  saveFavorites();
  $("#favoriteCount").textContent = state.favorites.size;
  renderVendors();
  if (state.selectedBooth) renderInspector(state.selectedBooth);
}

function selectVendor(vendor) {
  if (!vendor) return;
  state.selectedBooth = vendor;
  if (state.currentVenue !== vendor.venue) {
    state.currentVenue = vendor.venue;
    renderVenueNav();
    renderHeading();
    renderMetrics();
    renderMap();
    renderVendors();
  } else {
    renderVendors();
  }
  renderInspector(vendor);
  document.querySelector(".inspector")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function switchVenue(venueKey) {
  if (!venues[venueKey]) return;
  state.currentVenue = venueKey;
  state.selectedBooth = null;
  renderVenueNav();
  renderHeading();
  renderMetrics();
  renderMap();
  renderInspector(null);
  renderVendors();
  closeMobileNav();
}

function refreshIcons() {
  if (window.lucide?.createIcons) window.lucide.createIcons();
}

function showToastMessage(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToastMessage.timer);
  showToastMessage.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1900);
}

function closeMobileNav() {
  $("#sidebar")?.classList.remove("is-open");
  $("#mobileDimmer")?.classList.remove("is-visible");
}

function bindEvents() {
  $("#venueNav").addEventListener("click", (event) => {
    const button = event.target.closest("[data-venue]");
    if (button) switchVenue(button.dataset.venue);
  });

  $("#mapHotspots").addEventListener("click", (event) => {
    const hotspot = event.target.closest("[data-hotspot-venue]");
    if (!hotspot) return;
    if (state.currentVenue === "overview") {
      switchVenue(hotspot.dataset.hotspotVenue);
      return;
    }
    const referenceVendor = hotspot.dataset.hotspotReference
      ? state.referenceVendorById.get(hotspot.dataset.hotspotReference)
      : null;
    selectVendor(referenceVendor || getVendorData(hotspot.dataset.hotspotCode));
  });

  $("#boothDensityToggle").addEventListener("click", () => {
    if (state.currentVenue === "overview") return;
    state.showAllBooths = !state.showAllBooths;
    renderMap();
    showToastMessage(state.showAllBooths ? "\u5df2\u663e\u793a\u5168\u90e8\u5b98\u65b9\u644a\u4f4d\u6807\u7b7e" : "\u5df2\u5207\u6362\u4e3a\u91cd\u70b9\u644a\u4f4d\u6807\u7b7e");
  });

  $("#vendorGrid").addEventListener("click", (event) => {
    if (event.target.closest(".vendor-favorite")) return;
    const card = event.target.closest("[data-code]");
    if (card) selectVendor(getVendorData(card.dataset.code));
  });

  $("#vendorGrid").addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && event.target.closest("[data-code]")) {
      event.preventDefault();
      selectVendor(getVendorData(event.target.closest("[data-code]").dataset.code));
    }
  });

  $("#inspector").addEventListener("click", (event) => {
    const favorite = event.target.closest("[data-favorite-code]");
    if (favorite) {
      updateFavorite(favorite.dataset.favoriteCode);
      return;
    }
    const addRoute = event.target.closest("[data-add-route]");
    if (addRoute) {
      updateFavorite(addRoute.dataset.addRoute, false);
      state.routeOpen = true;
      renderRoute();
      showToastMessage("\u5df2\u6536\u85cf\uff0c\u5e76\u6253\u5f00\u907f\u5cf0\u8def\u7ebf");
      return;
    }
    const openVenue = event.target.closest("[data-open-venue]");
    if (openVenue) switchVenue(openVenue.dataset.openVenue);
  });

  $("#routeToggle").addEventListener("click", () => {
    state.routeOpen = !state.routeOpen;
    renderRoute();
    if (state.routeOpen) $("#routePanel").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  $("#closeRoute").addEventListener("click", () => { state.routeOpen = false; renderRoute(); });
  $("#routeTimeline").addEventListener("click", (event) => {
    const step = event.target.closest("[data-route-code]");
    if (!step) return;
    switchVenue(step.dataset.routeVenue);
    selectVendor(getVendorData(step.dataset.routeCode));
  });

  $("#favoritesToggle").addEventListener("click", () => {
    state.favoritesOnly = !state.favoritesOnly;
    $("#favoritesToggle").classList.toggle("is-active", state.favoritesOnly);
    showToastMessage(state.favoritesOnly ? "\u53ea\u770b\u5df2\u6536\u85cf\u5c55\u4f4d" : "\u5df2\u663e\u793a\u5168\u90e8\u5c55\u4f4d");
    renderVendors();
  });
  $("#clearFilter").addEventListener("click", () => {
    state.query = "";
    state.favoritesOnly = false;
    $("#searchInput").value = "";
    $("#favoritesToggle").classList.remove("is-active");
    renderVendors();
  });
  $("#searchInput").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderVendors();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement?.tagName !== "INPUT") {
      event.preventDefault();
      $("#searchInput").focus();
    }
    if (event.key === "Escape") closeMobileNav();
  });
  $("#navToggle").addEventListener("click", () => {
    $("#sidebar").classList.toggle("is-open");
    $("#mobileDimmer").classList.toggle("is-visible");
  });
  $("#mobileDimmer").addEventListener("click", closeMobileNav);
  $("#resetMap").addEventListener("click", () => {
    state.selectedBooth = null;
    renderInspector(null);
    showToastMessage("\u5df2\u91cd\u7f6e\u5730\u56fe\u89c6\u56fe");
  });
}

async function loadOfficialExhibitors() {
  try {
    const paths = ["CJ2026_official_exhibitors.json", "../CJ2026_official_exhibitors.json"];
    let response = null;
    for (const path of paths) {
      const candidate = await fetch(path, { cache: "no-store" });
      if (candidate.ok) {
        response = candidate;
        break;
      }
    }
    if (!response) throw new Error("\u5b98\u65b9\u5c55\u5546\u540d\u5355\u4e0d\u53ef\u7528");
    const payload = await response.json();
    state.official = (payload.exhibitors || []).map(officialToVendor);
    state.officialLoaded = true;
    renderVenueNav();
    renderHeading();
    renderMetrics();
    renderMap();
    renderVendors();
  } catch (error) {
    console.warn("\u5b98\u65b9\u5c55\u5546\u540d\u5355\u672a\u52a0\u8f7d\uff0c\u9875\u9762\u4f7f\u7528\u91cd\u70b9\u5c55\u4f4d\u6570\u636e\u3002", error);
  }
}

async function loadBoothCoordinates() {
  try {
    const response = await fetch("booth-coordinates.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    state.referenceBooths = Array.isArray(payload.booths) ? payload.booths : [];
    state.referenceLoaded = state.referenceBooths.length > 0;
    if (state.referenceLoaded) renderMap();
  } catch (error) {
    console.warn("\u53c2\u8003\u5730\u56fe\u5750\u6807\u672a\u52a0\u8f7d\uff0c\u9875\u9762\u4f7f\u7528\u672c\u5730\u5c55\u4f4d\u5750\u6807\u3002", error);
  }
}

function init() {
  $("#favoriteCount").textContent = state.favorites.size;
  renderVenueNav();
  renderHeading();
  renderMetrics();
  renderMap();
  renderInspector(null);
  renderVendors();
  renderRoute();
  bindEvents();
  window.addEventListener("resize", positionHotspots, { passive: true });
  refreshIcons();
  loadOfficialExhibitors();
  loadBoothCoordinates();
}

init();
