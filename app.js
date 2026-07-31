const venues = {
  overview: {
    label: "场馆总览",
    image: "assets/overview.png",
    area: "全部可达场馆",
    description: "先看整体位置，再点进具体场馆查看厂商、展位和无料。",
  },
  N1: {
    label: "N1 游戏风云",
    image: "assets/n1.png",
    area: "N 馆 / 游戏",
    description: "主机、游戏媒体和体验展位，适合开场先逛。",
  },
  N2: {
    label: "N2 游戏风云",
    image: "assets/n2.png",
    area: "N 馆 / 游戏",
    description: "Bilibili、好游快爆和多人互动展位集中。",
  },
  N3: {
    label: "N3 游戏风云",
    image: "assets/n3.png",
    area: "N 馆 / 游戏",
    description: "鸿蒙、网易、暴雪和游戏体验点。",
  },
  N4: {
    label: "N4 游戏风云",
    image: "assets/n4.png",
    area: "N 馆 / 游戏",
    description: "腾讯、咪咕等展位，适合在午后错峰查看。",
  },
  N5: {
    label: "N5 骁龙主题馆",
    image: "assets/n5.png",
    area: "N 馆 / 硬件",
    description: "一加、红魔等移动设备和电竞硬件。",
  },
  E3: {
    label: "E3 甜次元潮流生活",
    image: "assets/e3.png",
    area: "E 馆 / 二次元",
    description: "潮流生活、角色内容和轻量打卡点。",
  },
  E4: {
    label: "E4 次元视界 / 摄影区",
    image: "assets/e4.png",
    area: "E 馆 / 摄影",
    description: "索尼影像、Polaroid 和摄影向展位。",
  },
  E5: {
    label: "E5 模玩天地",
    image: "assets/e5.png",
    area: "E 馆 / 模玩",
    description: "潮玩、模型和收藏类互动展位。",
  },
  E6: {
    label: "E6 发烧硬件",
    image: "assets/e6.png",
    area: "E 馆 / 硬件",
    description: "显示器、键鼠、掌机和桌搭硬件集中。",
  },
  E7: {
    label: "E7 发烧硬件",
    image: "assets/e7.png",
    area: "E 馆 / 硬件",
    description: "键鼠、电竞设备和桌面装备，适合后段慢逛。",
  },
};

const spotlight = [
  {
    venue: "N1", code: "N1-G001", name: "PlayStation", type: "主机游戏",
    tags: ["PlayStation", "游戏体验", "优先"], priority: true,
    intro: "主机玩家优先目标，建议开场先确认试玩和排队规则。",
    egg: "以现场活动为准，重点关注试玩、拍照和官方互动。",
    steps: ["到达 N1-G001，先看当天活动牌", "按工作人员指引完成试玩或互动", "确认是否需要关注官方账号后领取"],
    requirements: "普通观众可达；热门时段可能排队，建议上午处理。",
    note: "官方展位信息已核验；具体赠品以现场库存和活动牌为准。",
  },
  {
    venue: "N1", code: "N1-G202", name: "aigo", type: "硬件",
    tags: ["硬件", "打卡"], priority: true,
    intro: "N1 硬件向重点展位，适合与 PlayStation 同段处理。",
    egg: "现场互动、拍照或关注活动可能对应小礼物。",
    steps: ["到展位确认当日互动项目", "完成工作人员指定的互动", "领取物料并确认是否限量"],
    requirements: "以现场活动牌为准；热门活动建议避开中午。",
    note: "目前暂无稳定的具体赠品清单，页面将其标记为待现场确认。",
  },
  {
    venue: "N1", code: "N1-G205", name: "GSE", type: "游戏发行",
    tags: ["小册子", "集章"], hasEgg: true,
    intro: "适合顺路领取资料型物料，通常比大型互动点省时间。",
    egg: "入场可领取小册子和集章本。",
    steps: ["到 N1-G205 找 GSE 展位", "入场时询问小册子和集章本", "若有集章任务，先拿本再按现场指引完成"],
    requirements: "数量有限，建议上午领取；无需默认排长队。",
    note: "信息来自用户现场分享，具体款式和库存以现场为准。",
  },
  {
    venue: "N2", code: "N2-01", name: "鹅鸭杀", type: "多人游戏",
    tags: ["互动游戏", "限定周边"], hasEgg: true,
    intro: "多人互动型展位，适合喜欢游戏周边的观众。",
    egg: "参与互动小游戏，有机会领取限定周边。",
    steps: ["到 N2-01 询问当日小游戏", "完成一轮指定互动", "凭完成结果向工作人员领取周边"],
    requirements: "奖品和参与名额可能限量，建议先问清是否需要排队或预约。",
    note: "用户经验贴描述为有机会领取，不代表每位参与者都能拿到同款。",
  },
  {
    venue: "N2", code: "N2-02", name: "哔哩哔哩", type: "游戏 / 二次元",
    tags: ["Bilibili", "热门", "优先"], priority: true,
    intro: "你的偏好优先项，建议把核心活动和物料分开看，先确认排队机制。",
    egg: "现场活动、游戏试玩或打卡可能对应周边，具体以当天任务牌为准。",
    steps: ["到 N2-02 先拍下活动时间和领取规则", "优先处理无需长队的打卡或任务", "再根据剩余时间决定是否排热门互动"],
    requirements: "人流预计较高；普通票可进入 N2，热门舞台和互动可能需排队。",
    note: "未把未经确认的具体周边写死，避免把往届物料误当成 2026 现场物料。",
  },
  {
    venue: "N2", code: "N2-11-1", name: "4399", type: "游戏平台",
    tags: ["游戏", "互动"],
    intro: "可作为 N2 游戏区的顺路补充点。",
    egg: "现场互动和试玩类物料以展位规则为准。",
    steps: ["到展位看互动牌", "完成指定试玩或问答", "询问领取点和每日库存"],
    requirements: "优先选择无需长队的项目。",
    note: "官方名单可核验，物料记录暂不如重点小红书经验稳定。",
  },
  {
    venue: "N2", code: "N2-11-2", name: "好游快爆", type: "游戏媒体",
    tags: ["试玩", "集章", "游戏周边"], hasEgg: true,
    intro: "适合一边试玩一边完成集章，效率取决于现场队列。",
    egg: "试玩、集章后可领取游戏周边。",
    steps: ["到 N2-11-2 领取任务或集章说明", "完成试玩和指定集章", "集齐后到兑换处领取周边"],
    requirements: "先确认集章点、兑换时间和每日上限。",
    note: "来自用户经验贴，奖品可能按库存分批发放。",
  },
  {
    venue: "N2", code: "N2-G201", name: "代号：香", type: "二次元游戏",
    tags: ["整理券", "伸手礼", "热门"], hasEgg: true, priority: true,
    intro: "高热度互动点，适合早到后先确认整理券。",
    egg: "整理券约 1500 张，问答预约卡约 300 张，并有伸手礼。",
    steps: ["到 N2-G201 先询问整理券发放时间", "按整理券或预约卡时段参与问答/互动", "完成后凭规则领取伸手礼"],
    requirements: "整理券和问答预约卡均可能快速发完，建议上午优先。",
    note: "数量来自用户分享，现场若有调整以工作人员公告为准。",
  },
  {
    venue: "N3", code: "N3-01", name: "华为鸿蒙", type: "系统 / 游戏生态",
    tags: ["鸿蒙", "任务", "移动电源"], hasEgg: true, priority: true,
    intro: "适合普通观众低成本打卡，但移动电源库存存在不同说法。",
    egg: "收集鸿蒙图鉴或完成任务，用户分享提到可领取移动电源。",
    steps: ["到 N3-01 领取鸿蒙图鉴或任务卡", "按任务完成体验、互动或打卡", "到兑换处核验任务并领取礼品"],
    requirements: "移动电源数量和兑换规则以现场为准，建议开场先问库存。",
    note: "不同文章出现 1000 / 4500 份两种说法，页面按‘数量待核验’处理。",
  },
  {
    venue: "N3", code: "N3-02", name: "网易游戏", type: "游戏",
    tags: ["游戏", "试玩"], priority: true,
    intro: "N3 游戏区重点厂商，可与暴雪和华为一起安排。",
    egg: "试玩、舞台或互动赠品以当天活动安排为准。",
    steps: ["到 N3-02 查看活动牌", "优先选择短时试玩或无需预约的项目", "完成互动后询问兑换点"],
    requirements: "热门 IP 可能排队，建议先记录活动时间。",
    note: "官方名单已核验，具体无料未在稳定来源中确认。",
  },
  {
    venue: "N3", code: "N3-03", name: "暴雪", type: "游戏",
    tags: ["游戏", "热门"], priority: true,
    intro: "热门游戏厂商，推荐错峰查看活动和周边。",
    egg: "关注、拍照、发帖等活动可能对应纪念物料。",
    steps: ["先询问是否有现场任务或打卡规则", "按要求关注、拍照或发布内容", "凭完成页面到兑换处领取"],
    requirements: "部分用户分享提到每日海报 1000 份，库存以现场为准。",
    note: "‘每日海报 1000 份’来自用户经验，其他周边不要默认保证。",
  },
  {
    venue: "N3", code: "N3-06", name: "HKC", type: "显示器 / 硬件",
    tags: ["硬件", "显示器"], priority: true,
    intro: "硬件偏好优先点，适合在人流较低时快速看产品。",
    egg: "现场体验、拍照或互动礼品以活动牌为准。",
    steps: ["到 N3-06 先看是否有签到/互动任务", "完成指定体验或打卡", "询问是否有每日限量礼品"],
    requirements: "暂无稳定的具体无料清单。",
    note: "官方展位信息已核验。",
  },
  {
    venue: "N3", code: "N3-09", name: "我的花园世界", type: "游戏 / 生活方式",
    tags: ["拍照打卡", "限定周边"], hasEgg: true,
    intro: "轻量拍照点，适合错开大型展位后补充。",
    egg: "拍照打卡，有机会获得鲜花和限定周边。",
    steps: ["到 N3-09 找到拍照打卡点", "按现场要求完成拍照或发布", "向工作人员确认领取方式"],
    requirements: "是‘有机会’而非固定发放，先问每日库存。",
    note: "来自用户经验贴。",
  },
  {
    venue: "N3", code: "N3-10", name: "峡谷争锋", type: "电竞游戏",
    tags: ["集章", "扭蛋", "周边"], hasEgg: true,
    intro: "任务较多，适合有时间完成一整套集章的观众。",
    egg: "集章、PR 卡、吧唧、透扇、编织袋和扭蛋等。",
    steps: ["到 N3-10 领取集章卡", "完成各互动点并集齐印章", "按集章结果兑换 PR 卡、吧唧或扭蛋"],
    requirements: "不同奖励对应不同完成度，先确认兑换表和剩余库存。",
    note: "物料清单来自用户经验贴，款式和数量可能变化。",
  },
  {
    venue: "N4", code: "N4-03", name: "腾讯 / 猫仙札", type: "游戏 / 二次元",
    tags: ["腾讯", "二次元"], priority: true,
    intro: "N4 重点内容，建议用作中段错峰点。",
    egg: "活动、试玩和打卡物料以当天规则为准。",
    steps: ["到 N4-03 查看活动牌", "优先处理短流程互动", "完成后询问领取窗口和库存"],
    requirements: "热门项目可能有时段限制。",
    note: "官方名单已核验，暂未确认固定物料。",
  },
  {
    venue: "N4", code: "N4-05", name: "咪咕", type: "游戏 / 内容",
    tags: ["游戏", "内容"],
    intro: "N4 可顺路查看的内容展位。",
    egg: "现场互动礼品以展位公告为准。",
    steps: ["询问当日互动", "按要求完成体验或打卡", "现场确认兑换方式"],
    requirements: "暂无稳定的具体无料清单。",
    note: "官方名单已核验。",
  },
  {
    venue: "N5", code: "N5-03", name: "一加", type: "手机 / 硬件",
    tags: ["硬件", "电竞"], priority: true,
    intro: "N5 硬件向重点，建议与红魔安排成一组。",
    egg: "签到、互动和体验礼品以现场规则为准。",
    steps: ["到 N5-03 查看体验区任务", "完成指定互动或产品体验", "询问礼品领取点"],
    requirements: "暂无稳定的具体无料清单。",
    note: "官方名单已核验。",
  },
  {
    venue: "N5", code: "N5-08", name: "红魔", type: "电竞硬件",
    tags: ["硬件", "电竞", "热门"], priority: true,
    intro: "适合硬件偏好用户，热门时段建议避开。",
    egg: "产品体验、挑战或拍照打卡礼品以当天规则为准。",
    steps: ["到 N5-08 先问是否需要排队", "完成短流程体验或挑战", "按完成结果领取礼品"],
    requirements: "可能存在排队和限量，建议下午错峰。",
    note: "官方名单已核验。",
  },
  {
    venue: "E3", code: "E3-CA304", name: "Wink", type: "潮流生活",
    tags: ["二次元", "拍照"], priority: true,
    intro: "E3 轻量打卡点，可放在 E 馆后半程。",
    egg: "拍照、互动或关注活动以现场公告为准。",
    steps: ["到 E3-CA304 确认当日打卡任务", "完成拍照或互动", "询问是否有即时领取物料"],
    requirements: "暂无稳定的具体物料清单。",
    note: "官方名单已核验。",
  },
  {
    venue: "E4", code: "E4-M001", name: "索尼影像", type: "摄影 / 硬件",
    tags: ["Sony", "摄影", "硬件"], priority: true,
    intro: "摄影向重点展位，也适合 PlayStation 用户顺便比较 Sony 生态。",
    egg: "体验和打卡物料以现场活动为准。",
    steps: ["到 E4-M001 查看体验和打卡规则", "完成指定体验或拍摄任务", "询问是否有兑换物料"],
    requirements: "热门设备体验可能排队。",
    note: "官方名单已核验。",
  },
  {
    venue: "E4", code: "E4-M306", name: "Polaroid", type: "摄影 / 生活方式",
    tags: ["摄影", "拍照"],
    intro: "轻量摄影打卡点，可在 E4 顺路查看。",
    egg: "拍照或互动赠品以现场为准。",
    steps: ["确认是否有现场拍摄体验", "完成互动或拍照", "到兑换处确认礼品"],
    requirements: "暂无稳定的具体物料清单。",
    note: "官方名单已核验。",
  },
  {
    venue: "E5", code: "E5-FM102", name: "淘天潮玩", type: "潮玩 / 模玩",
    tags: ["集章", "扭蛋", "热门"], hasEgg: true, priority: true,
    intro: "物料记录明确，但互动点较多，适合预留完整时间。",
    egg: "4 个互动集章，抽限定扭蛋，现场有 3 万+周边。",
    steps: ["到 E5-FM102 领取集章说明", "完成 4 个互动并集齐印章", "按规则抽限定扭蛋或兑换周边"],
    requirements: "不同互动和奖品可能有每日上限，先确认兑换时间。",
    note: "数量来自用户经验贴，‘3 万+’不代表每种周边都充足。",
  },
  {
    venue: "E6", code: "E6-E001", name: "维信诺", type: "显示 / 硬件",
    tags: ["硬件", "显示"], priority: true,
    intro: "E6 硬件区可快速浏览的显示技术展位。",
    egg: "互动和体验礼品以展位规则为准。",
    steps: ["查看是否有签到或体验任务", "完成任务", "确认限量物料领取方式"],
    requirements: "暂无稳定的具体无料清单。",
    note: "官方名单已核验。",
  },
  {
    venue: "E6", code: "E6-E002", name: "Sony INZONE", type: "电竞硬件",
    tags: ["Sony", "硬件", "优先"], priority: true,
    intro: "硬件和 Sony 偏好交叉目标，建议在人流低时体验。",
    egg: "试玩、拍照或互动礼品以现场规则为准。",
    steps: ["到 E6-E002 确认体验排队规则", "完成耳机/显示设备体验", "询问是否有现场兑换物料"],
    requirements: "体验区可能排队，先处理无需排队项目。",
    note: "官方名单已核验。",
  },
  {
    venue: "E6", code: "E6-E003", name: "傲风", type: "电竞家具",
    tags: ["硬件", "桌搭"], priority: true,
    intro: "适合硬件用户顺路看电竞椅和桌面设备。",
    egg: "互动、拍照或抽奖活动以现场公告为准。",
    steps: ["到 E6-E003 查看当日互动", "完成体验或拍照任务", "向工作人员确认领取/抽奖条件"],
    requirements: "暂无稳定的具体无料清单。",
    note: "官方名单已核验。",
  },
  {
    venue: "E6", code: "E6-E096", name: "HiBy", type: "音频 / 硬件",
    tags: ["初音", "吧唧", "立牌"], hasEgg: true, priority: true,
    intro: "二次元和硬件交叉目标，流程清晰，建议优先处理。",
    egg: "拍初音 M500，带 #HiByChinaJoy2026 发帖，可换吧唧和立牌。",
    steps: ["到 E6-E096 找到初音 M500 展示点", "拍照并发布带 #HiByChinaJoy2026 的帖子", "向工作人员出示帖子，兑换吧唧和立牌"],
    requirements: "先确认平台、帖子可见性和每日兑换库存。",
    note: "来自用户经验贴；话题和物料以现场核验为准。",
  },
  {
    venue: "E6", code: "E6-E101", name: "VGN", type: "键鼠 / 硬件",
    tags: ["键鼠", "硬件"], priority: true,
    intro: "键鼠硬件重点展位，适合快速试用和比较。",
    egg: "互动抽奖或体验礼品以现场规则为准。",
    steps: ["到 E6-E101 先确认是否有签到礼", "完成产品体验或互动", "按规则领取或参与抽奖"],
    requirements: "暂无稳定的具体无料清单。",
    note: "官方名单已核验。",
  },
  {
    venue: "E6", code: "E6-E201", name: "OneXPlayer", type: "掌机 / 硬件",
    tags: ["掌机", "挑战赛", "高价值"], hasEgg: true, priority: true,
    intro: "硬件高价值目标，挑战赛奖品门槛高但值得关注。",
    egg: "黑神话挑战赛，TOP10 有 DJI Air 3S。",
    steps: ["到 E6-E201 询问挑战赛报名和场次", "完成黑神话挑战并确认成绩", "若进入 TOP10，按工作人员流程登记领奖"],
    requirements: "TOP10 属于高难度竞争奖励，不应当作稳定到手物料。",
    note: "来自用户分享；奖品和排名规则需现场确认。",
  },
  {
    venue: "E6", code: "E6-E506", name: "绿联", type: "数码配件",
    tags: ["硬件", "发帖", "抽奖"], hasEgg: true,
    intro: "流程偏关注和发帖，适合在 E6 末段顺路处理。",
    egg: "关注、发帖、互动后参与抽奖。",
    steps: ["关注官方账号", "完成现场互动并发布指定内容", "出示完成页面，按规则参与抽奖"],
    requirements: "抽奖不是固定赠品，确认活动时间和每日次数。",
    note: "来自用户经验贴。",
  },
  {
    venue: "E6", code: "E6-EDC01", name: "AULUMU", type: "桌搭 / 数码配件",
    tags: ["打卡", "进群", "抽 Apple Watch"], hasEgg: true, priority: true,
    intro: "任务步骤较多，建议在人流低的时段一次完成。",
    egg: "打卡、关注、进群、发帖后抽 Apple Watch。",
    steps: ["完成现场打卡", "关注账号并加入指定群", "发布指定内容，出示凭证参与抽奖"],
    requirements: "Apple Watch 属于抽奖结果，不是完成任务必得。",
    note: "来自用户经验贴。",
  },
  {
    venue: "E7", code: "E7-S201", name: "迈从", type: "键鼠 / 硬件",
    tags: ["硬件", "键鼠"], priority: true,
    intro: "E7 硬件区可快速体验的键鼠品牌。",
    egg: "互动、试玩或抽奖以现场公告为准。",
    steps: ["确认当日活动", "完成体验或互动", "询问领取或抽奖条件"],
    requirements: "暂无稳定的具体无料清单。",
    note: "官方名单已核验。",
  },
  {
    venue: "E7", code: "E7-S602", name: "前行者", type: "键鼠 / 硬件",
    tags: ["关注", "打卡", "刮刮乐"], hasEgg: true, priority: true,
    intro: "流程短，适合作为 E7 的低成本收尾点。",
    egg: "关注、打卡后参与刮刮乐。",
    steps: ["关注前行者官方账号", "完成展位打卡", "凭完成页面参与刮刮乐"],
    requirements: "奖品随机，先确认刮刮乐每日库存。",
    note: "来自用户经验贴。",
  },
  {
    venue: "E7", code: "E7-S603-1", name: "黑鲨", type: "电竞硬件",
    tags: ["硬件", "电竞"], priority: true,
    intro: "E7 电竞硬件重点，建议避开人流峰值。",
    egg: "体验、挑战或拍照礼品以现场规则为准。",
    steps: ["确认是否需要排队或预约", "完成指定体验/挑战", "按规则领取礼品"],
    requirements: "暂无稳定的具体无料清单。",
    note: "官方名单已核验。",
  },
  {
    venue: "E7", code: "E7-S802", name: "达尔优", type: "键鼠 / 硬件",
    tags: ["硬件", "键鼠"], priority: true,
    intro: "与迈从、前行者同区，可连续浏览。",
    egg: "互动、体验和抽奖以现场规则为准。",
    steps: ["查看当日互动牌", "完成体验或打卡", "确认兑换/抽奖时间"],
    requirements: "暂无稳定的具体无料清单。",
    note: "官方名单已核验。",
  },
  {
    venue: "E7", code: "E7-S807", name: "松能 X", type: "电竞家具",
    tags: ["四品牌集章", "电竞椅", "3D 打印机"], hasEgg: true, priority: true,
    intro: "集章截止时间早，必须在上午或中午前处理。",
    egg: "四品牌集章，13:00 截止，可抽电竞椅、3D 打印机、支架。",
    steps: ["到 E7-S807 领取四品牌集章规则", "在 13:00 前完成四品牌集章", "按规则参与抽奖或兑换支架"],
    requirements: "13:00 是关键截止点；大型奖品属于抽奖，不是必得。",
    note: "来自用户经验贴，现场可能调整截止时间。",
  },
];

const routeStops = [
  { time: "09:00", venue: "E6", code: "E6-E096", title: "先拿 HiBy 二次元硬件物料", text: "开场先处理拍照发帖兑换，避免下午排队。" },
  { time: "09:40", venue: "N1", code: "N1-G001", title: "PlayStation / GSE", text: "先确认 PlayStation 活动，再顺路领取 GSE 小册子和集章本。" },
  { time: "11:00", venue: "N2", code: "N2-G201", title: "代号：香整理券", text: "优先问整理券和预约卡，发完就跳过长队。" },
  { time: "11:40", venue: "N2", code: "N2-11-2", title: "好游快爆 / Bilibili", text: "先做短流程试玩和集章，热门互动留到队列较短时。" },
  { time: "13:30", venue: "N3", code: "N3-01", title: "华为鸿蒙任务", text: "午后处理图鉴任务，先核验移动电源库存和兑换规则。" },
  { time: "14:20", venue: "N3", code: "N3-10", title: "峡谷争锋集章", text: "有时间再完成整套集章，避免为了单个物料反复折返。" },
  { time: "15:30", venue: "E6", code: "E6-E201", title: "掌机和硬件体验", text: "错开开场峰值，查看 OneXPlayer、Sony INZONE、VGN。" },
  { time: "16:20", venue: "E7", code: "E7-S807", title: "E7 集章收尾", text: "松能 X 集章需留意 13:00 截止，晚到只看其他展位。" },
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
  const name = item.name_zh || item.name_en || "未命名展商";
  const intro = (item.introduction_zh || item.introduction_en || "官方展商信息").replace(/\s+/g, " ").trim();
  return {
    venue,
    code: item.code || `${venue}-官方展位`,
    name,
    type: inferType(`${name} ${intro}`),
    tags: ["官方名单"],
    intro: intro.slice(0, 120),
    egg: "暂无已核验的具体无料记录。",
    steps: ["到达官方展位", "查看当日活动牌和互动规则", "按现场规则确认是否有领取物料"],
    requirements: "物料和活动以现场公告为准。",
    note: "来自 CJ 官方展商名单；页面未把未经核验的赠品写成固定奖励。",
    official: true,
  };
}

function inferType(text) {
  if (/键鼠|显示器|硬件|掌机|电竞椅|手机|数码|音频|桌搭/.test(text)) return "硬件";
  if (/摄影|相机|影像|Polaroid/.test(text)) return "摄影";
  if (/潮玩|模玩|动漫|二次元|IP|角色/.test(text)) return "二次元 / 潮玩";
  if (/媒体|平台|发行/.test(text)) return "游戏媒体";
  return "游戏";
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
  return String(value).toLowerCase().replace(/[\s·・,，.。/\\()（）+&：:「」《》]/g, "");
}

const referenceAliases = {
  "n1-aigo": "N1-G202",
  "n1-gse": "N1-G205",
  "n1-playstation": "N1-G001",
  "n2-代号香": "N2-G201",
  "n3-华为游戏中心": "N3-01",
  "n3-暴雪游戏": "N3-03",
  "e5-淘天潮玩": "E5-FM102",
  "e6-维信诺": "E6-E001",
  "e6-索尼inzone": "E6-E002",
  "e6-傲风": "E6-E003",
  "e6-hiby": "E6-E096",
  "e6-vgn": "E6-E101",
  "e6-onexplayer": "E6-E201",
  "e6-绿联": "E6-E506",
  "e6-aulumu": "E6-EDC01",
  "e7-迈从": "E7-S201",
  "e7-前行者": "E7-S602",
  "e7-黑鲨": "E7-S603-1",
  "e7-达尔优": "E7-S802",
  "e7-松能x": "E7-S807",
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
    tags: ["地图厂商"],
    intro: `${reference.name}，位置来自逛展神器地图。`,
    egg: "暂无已核验的具体无料记录。",
    steps: ["到达地图圆点位置", "查看展位活动牌", "按现场规则确认是否有物料"],
    requirements: "物料和活动以现场公告为准。",
    note: "厂商名称和位置来自逛展神器地图；详情未与官方展商名单完全匹配。",
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
  $("#venueKicker").textContent = `${venue.area} / 普通观众可达`;
  $("#venueTitle").textContent = venue.label;
  $("#venueDescription").textContent = venue.description;
  $("#mapTitle").textContent = state.currentVenue === "overview" ? "全部场馆" : venue.label;
  $("#headingMeta").innerHTML = `
    <span class="meta-tag"><strong>${getVenueCount(state.currentVenue)}</strong> 官方记录</span>
    <span class="meta-tag"><strong>${spotlight.filter((vendor) => state.currentVenue === "overview" || vendor.venue === state.currentVenue).length}</strong> 重点展位</span>
    <span class="meta-tag"><strong>${spotlight.filter((vendor) => (state.currentVenue === "overview" || vendor.venue === state.currentVenue) && vendor.hasEgg).length}</strong> 无料记录</span>
  `;
}

function renderMetrics() {
  const venueVendors = getVenueVendors(state.currentVenue);
  const known = venueVendors.filter((vendor) => !vendor.official || vendor.hasEgg);
  const priority = venueVendors.filter((vendor) => vendor.priority).length;
  const estimate = state.currentVenue === "overview" ? "5—7" : `${Math.max(1, Math.ceil(venueVendors.length / 8))}—${Math.max(2, Math.ceil(venueVendors.length / 5))}`;
  $("#metricRow").innerHTML = [
    ["官方展位", venueVendors.length, "个"],
    ["有物料记录", known.filter((vendor) => vendor.hasEgg).length, "个"],
    ["偏好优先", priority, "个"],
    ["建议停留", estimate, "小时"],
  ].map(([label, value, unit]) => `<div class="metric"><span class="metric-label">${label}</span><div class="metric-value">${value}<small>${unit}</small></div></div>`).join("");
}

function renderMap() {
  const venue = venues[state.currentVenue];
  const image = $("#mapImage");
  image.classList.add("is-switching");
  window.setTimeout(() => {
    image.src = venue.image;
    image.alt = `ChinaJoy 2026 ${venue.label}地图`;
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
    densityToggle.querySelector("span").textContent = state.showAllBooths ? "全部摊位" : "重点摊位";
  }

  $("#mapHotspots").innerHTML = spots.map((spot) => {
    const item = spot.vendor;
    const classes = ["map-hotspot", item?.priority ? "is-priority" : "", item?.hasEgg ? "is-egg" : "", spot.isBooth ? "is-booth" : "", state.currentVenue === "overview" ? "overview-hotspot" : ""].filter(Boolean).join(" ");
    const label = state.currentVenue === "overview" ? spot.label : "";
    const name = item?.name || venues[spot.venue]?.label || label;
    return `<button type="button" class="${classes}" style="left:${spot.left}%;top:${spot.top}%" data-spot-left="${spot.left}" data-spot-top="${spot.top}" data-hotspot-venue="${escapeHtml(spot.venue || state.currentVenue)}" data-hotspot-reference="${escapeHtml(spot.referenceId || "")}" data-hotspot-code="${escapeHtml(item?.code || "")}" title="${escapeHtml(name)}" aria-label="查看 ${escapeHtml(name)}"><span>${escapeHtml(label)}</span></button>`;
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
    <article class="vendor-card ${vendor.priority ? "priority" : ""} ${vendor.hasEgg ? "has-egg" : ""} ${state.selectedBooth && cleanCode(state.selectedBooth.code) === code ? "is-selected" : ""}" data-code="${escapeHtml(vendor.code)}" style="--i:${Math.min(index, 12)}" tabindex="0" role="button" aria-label="查看 ${escapeHtml(vendor.name)} 展位详情">
      <div class="vendor-card-top"><span class="vendor-code">${escapeHtml(vendor.code)}</span><span class="vendor-favorite ${favorite ? "is-favorite" : ""}"><i data-lucide="${favorite ? "heart" : "heart"}"></i></span></div>
      <h4>${escapeHtml(vendor.name)}</h4>
      <p>${escapeHtml(summary)}</p>
      <div class="vendor-card-footer"><span class="vendor-type">${escapeHtml(vendor.type || "官方展位")}</span>${vendor.hasEgg ? '<span class="egg-badge"><i data-lucide="gift"></i>无料</span>' : ""}</div>
    </article>
  `;
}

function renderVendors() {
  const list = getFilteredVendors();
  const max = state.query || state.favoritesOnly ? 80 : state.currentVenue === "overview" ? 60 : 32;
  const visible = list.slice(0, max);
  $("#vendorTitle").textContent = state.favoritesOnly ? "我的收藏" : state.query ? `搜索结果：${state.query}` : state.currentVenue === "overview" ? "重点厂商" : `${venues[state.currentVenue].label} / 展位信息`;
  $("#resultCount").textContent = `${visible.length}${visible.length < list.length ? ` / ${list.length}` : ""} 个展位`;
  $("#clearFilter").hidden = !state.query && !state.favoritesOnly;
  if (!visible.length) {
    $("#vendorGrid").innerHTML = `<div class="empty-grid"><i data-lucide="search-x"></i><strong>没有匹配的展位</strong><span>试试厂商名、展位号或“无料”等关键词。</span></div>`;
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
      <button type="button" class="favorite-button ${favorite ? "is-favorite" : ""}" data-favorite-code="${escapeHtml(vendor.code)}" title="${favorite ? "取消收藏" : "收藏展位"}" aria-label="${favorite ? "取消收藏" : "收藏展位"}"><i data-lucide="heart"></i></button>
    </div>
    <p class="inspector-subtitle">${escapeHtml(vendor.type || "官方展位")} · ${escapeHtml(venues[vendor.venue]?.label || vendor.venue || "普通观众可达")}</p>
    <div class="tag-row">${(vendor.tags || []).map((tag) => `<span class="tag ${tag === "优先" || vendor.priority && tag === "热门" ? "priority" : ""}">${escapeHtml(tag)}</span>`).join("")}${vendor.official ? '<span class="tag">官方名单</span>' : ""}</div>
    <div class="detail-block"><span class="detail-label">物料 / 无料</span><p class="detail-text">${escapeHtml(vendor.egg || "暂无已核验记录")}</p></div>
    <div class="detail-block"><span class="detail-label">领取步骤</span><p class="detail-text">${(vendor.steps || []).map((step, index) => `${index + 1}. ${escapeHtml(step)}`).join("<br>")}</p></div>
    <div class="detail-block"><span class="detail-label">要求与提醒</span><p class="detail-text detail-note">${escapeHtml(vendor.requirements || "以现场公告为准")}<br>${escapeHtml(vendor.note || "")}</p></div>
    <div class="inspector-actions"><button type="button" class="action-button" data-add-route="${escapeHtml(vendor.code)}"><i data-lucide="route"></i>${favorite ? "已收藏，加入路线" : "收藏并加入路线"}</button><button type="button" class="action-button secondary" data-open-venue="${escapeHtml(vendor.venue)}"><i data-lucide="map"></i>看场馆地图</button></div>
  `;
  refreshIcons();
}

function renderRoute() {
  const panel = $("#routePanel");
  panel.hidden = !state.routeOpen;
  if (!state.routeOpen) return;
  $("#routeTimeline").innerHTML = routeStops.map((stop, index) => `
    <button type="button" class="route-step" style="--i:${index}" data-route-code="${escapeHtml(stop.code)}" data-route-venue="${escapeHtml(stop.venue)}">
      <span class="route-time">${escapeHtml(stop.time)} · ${escapeHtml(stop.venue)}</span><h4>${escapeHtml(stop.title)}</h4><p>${escapeHtml(stop.text)}</p>
    </button>
  `).join("");
}

function updateFavorite(code, showToast = true) {
  const key = cleanCode(code);
  if (state.favorites.has(key)) {
    state.favorites.delete(key);
    if (showToast) showToastMessage("已取消收藏");
  } else {
    state.favorites.add(key);
    if (showToast) showToastMessage("已加入收藏");
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
    showToastMessage(state.showAllBooths ? "已显示全部官方摊位标签" : "已切换为重点摊位标签");
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
      showToastMessage("已收藏，并打开避峰路线");
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
    showToastMessage(state.favoritesOnly ? "只看已收藏展位" : "已显示全部展位");
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
    showToastMessage("已重置地图视图");
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
    if (!response) throw new Error("官方展商名单不可用");
    const payload = await response.json();
    state.official = (payload.exhibitors || []).map(officialToVendor);
    state.officialLoaded = true;
    renderVenueNav();
    renderHeading();
    renderMetrics();
    renderMap();
    renderVendors();
  } catch (error) {
    console.warn("官方展商名单未加载，页面使用重点展位数据。", error);
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
    console.warn("参考地图坐标未加载，页面使用本地展位坐标。", error);
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
