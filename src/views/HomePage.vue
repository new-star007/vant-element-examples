<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header__logo">
        <img class="home-header__logo-img" :src="`${baseUrl}logo.png`" alt="Vant Element" />
      </div>
      <div class="home-header__title">Vant Element</div>
      <div class="home-header__desc">基于 Vant 的 Element 风格组件库</div>
    </div>

    <div class="home-body">
      <div v-for="group in categories" :key="group.name" class="home-group">
        <div class="home-group__title">{{ group.name }} <span class="home-group__count">{{ group.children.length }}</span></div>
        <div class="home-group__grid">
          <div
            v-for="item in group.children"
            :key="item.name"
            class="home-grid-item"
            @click="onItemClick(item)"
          >
            <div class="home-grid-item__icon" :style="{ background: item.color }">
              <van-icon :name="item.icon" />
            </div>
            <div class="home-grid-item__info">
              <span class="home-grid-item__label">{{ item.zhName }}</span>
              <span class="home-grid-item__desc">{{ item.name }}</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant'

const COLORS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
  'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  'linear-gradient(135deg, #f5576c 0%, #ff6f91 100%)',
  'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
  'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
  'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
  'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
  'linear-gradient(135deg, #9890e3 0%, #b1f4cf 100%)',
  'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
]

export default {
  name: 'HomePage',
  components: { [Icon.name]: Icon },
  computed: {
    baseUrl() {
      return process.env.BASE_URL || '/'
    }
  },
  data() {
    return {
      categories: [
        {
          name: '基础组件',
          children: [
            { name: 'Button', zhName: '按钮', icon: 'gem-o', color: COLORS[0], path: '/button' },
            { name: 'Icon', zhName: '图标', icon: 'photo-o', color: COLORS[1], path: '/icon' },
            { name: 'Image', zhName: '图片', icon: 'photo', color: COLORS[2], path: '/image' },
            { name: 'Layout', zhName: '布局', icon: 'bar-chart-o', color: COLORS[3], path: '/layout' },
            { name: 'Card', zhName: '卡片', icon: 'stop', color: COLORS[4], path: '/card' },
            { name: 'Link', zhName: '链接', icon: 'link-o', color: COLORS[5], path: '/link' },
            { name: 'Spinner', zhName: '加载', icon: 'replay', color: COLORS[6], path: '/spinner' }
          ]
        },
        {
          name: '表单组件',
          children: [
            { name: 'Cascader', zhName: '级联选择', icon: 'label-o', color: COLORS[5], path: '/cascader' },
            { name: 'Checkbox', zhName: '复选框', icon: 'checked', color: COLORS[6], path: '/checkbox' },
            { name: 'DatePicker', zhName: '日期选择', icon: 'calendar-o', color: COLORS[7], path: '/date-picker' },
            { name: 'Form', zhName: '表单', icon: 'edit', color: COLORS[8], path: '/form' },
            { name: 'Input', zhName: '输入框', icon: 'smile-o', color: COLORS[9], path: '/input' },
            { name: 'InputNumber', zhName: '数字输入', icon: 'sort', color: COLORS[10], path: '/input-number' },
            { name: 'Radio', zhName: '单选框', icon: 'circle', color: COLORS[10], path: '/radio' },
            { name: 'Rate', zhName: '评分', icon: 'star-o', color: COLORS[11], path: '/rate' },
            { name: 'Select', zhName: '选择器', icon: 'down', color: COLORS[12], path: '/select' },
            { name: 'Slider', zhName: '滑块', icon: 'more', color: COLORS[13], path: '/slider' },
            { name: 'Switch', zhName: '开关', icon: 'exchange', color: COLORS[14], path: '/switch' },
            { name: 'TimePicker', zhName: '时间选择', icon: 'clock-o', color: COLORS[15], path: '/time-picker' },
            { name: 'Upload', zhName: '上传', icon: 'upload', color: COLORS[0], path: '/upload' },
            { name: 'TimeSelect', zhName: '时间选择', icon: 'clock-o', color: COLORS[4], path: '/time-select' },
            { name: 'Autocomplete', zhName: '自动完成', icon: 'search', color: COLORS[6], path: '/autocomplete' }
          ]
        },
        {
          name: '反馈组件',
          children: [
            { name: 'Alert', zhName: '警告', icon: 'info-o', color: COLORS[1], path: '/alert' },
            { name: 'Dialog', zhName: '对话框', icon: 'chat-o', color: COLORS[2], path: '/dialog' },
            { name: 'Loading', zhName: '加载', icon: 'replay', color: COLORS[3], path: '/loading' },
            { name: 'Message', zhName: '消息', icon: 'chat-o', color: COLORS[4], path: '/message' },
            { name: 'MessageBox', zhName: '消息弹框', icon: 'question-o', color: COLORS[5], path: '/message-box' },
            { name: 'Notification', zhName: '通知', icon: 'bell', color: COLORS[6], path: '/notification' },
            { name: 'Popover', zhName: '气泡卡片', icon: 'more-o', color: COLORS[7], path: '/popover' },
            { name: 'Progress', zhName: '进度条', icon: 'chart-trending-o', color: COLORS[8], path: '/progress' },
            { name: 'Tooltip', zhName: '文字提示', icon: 'info-o', color: COLORS[9], path: '/tooltip' },
            { name: 'Popconfirm', zhName: '气泡确认', icon: 'question-o', color: COLORS[10], path: '/popconfirm' },
            { name: 'Drawer', zhName: '抽屉', icon: 'arrow-up', color: COLORS[11], path: '/drawer' }
          ]
        },
        {
          name: '展示组件',
          children: [
            { name: 'Badge', zhName: '标记', icon: 'certificate', color: COLORS[9], path: '/badge' },
            { name: 'Carousel', zhName: '走马灯', icon: 'photo-o', color: COLORS[10], path: '/carousel' },
            { name: 'Collapse', zhName: '折叠面板', icon: 'exchange', color: COLORS[11], path: '/collapse' },
            { name: 'Descriptions', zhName: '描述列表', icon: 'description', color: COLORS[12], path: '/descriptions' },
            { name: 'Divider', zhName: '分割线', icon: 'minus', color: COLORS[13], path: '/divider' },
            { name: 'Empty', zhName: '空状态', icon: 'smile', color: COLORS[14], path: '/empty' },
            { name: 'List', zhName: '列表', icon: 'bars', color: COLORS[15], path: '/list-demo' },
            { name: 'Pagination', zhName: '分页', icon: 'more', color: COLORS[0], path: '/pagination' },
            { name: 'Skeleton', zhName: '骨架屏', icon: 'scan', color: COLORS[1], path: '/skeleton' },
            { name: 'Table', zhName: '表格', icon: 'apps-o', color: COLORS[2], path: '/table' },
            { name: 'Tag', zhName: '标签', icon: 'tag-o', color: COLORS[3], path: '/tag' },
            { name: 'Calendar', zhName: '日历', icon: 'calendar-o', color: COLORS[5], path: '/calendar' },
          ]
        },
        {
          name: '导航组件',
          children: [
            { name: 'Steps', zhName: '步骤条', icon: 'coupon-o', color: COLORS[4], path: '/steps' },
            { name: 'Tabs', zhName: '标签页', icon: 'exchange', color: COLORS[5], path: '/tabs' },
            { name: 'Backtop', zhName: '回到顶部', icon: 'arrow-up', color: COLORS[6], path: '/backtop' },
            { name: 'Dropdown', zhName: '下拉菜单', icon: 'arrow-down', color: COLORS[7], path: '/dropdown' }
          ]
        },
        {
          name: '业务组件',
          children: [
            { name: 'ButtonGroup', zhName: '按钮组', icon: 'diamond-o', color: COLORS[6], path: '/button-group' },
            { name: 'ListPage', zhName: '列表页', icon: 'todo-list-o', color: COLORS[7], path: '/list-page' },
            { name: 'InfiniteScroll', zhName: '无限滚动', icon: 'arrow-down', color: COLORS[8], path: '/infinite-scroll' }
          ]
        },
        {
          name: '示例页面',
          children: [
            { name: 'UserTable', zhName: '用户表格', icon: 'contact', color: COLORS[9], path: '/user-table' },
            { name: 'UserList', zhName: '用户列表', icon: 'contact', color: COLORS[10], path: '/list' }
          ]
        }
      ]
    }
  },
  methods: {
    onItemClick(item) {
      if (item.path) {
        if (this.$route.path !== item.path) {
          this.$router.push(item.path).catch(() => {})
        }
      } else {
        this.$message && this.$message.info(`${item.name} 组件演示页面开发中`)
      }
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: #f7f8fa;
  max-width: 100vw;
  overflow-x: hidden;
}

.home-header {
  background: #1a1a2e;
  padding: 40px 20px 32px;
  text-align: center;
  color: #fff;
}

.home-header__logo-img {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  object-fit: cover;
}

.home-header__title {
  margin-top: 12px;
  font-size: 24px;
  font-weight: 600;
}

.home-header__desc {
  margin-top: 6px;
  font-size: 13px;
  opacity: 0.8;
}

.home-body {
  padding: 16px;
  overflow-x: hidden;
}

.home-group {
  margin-bottom: 20px;
  width: 100%;
}

.home-group__title {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 4px 12px;
  font-size: 15px;
  font-weight: 600;
  color: #323233;
}

.home-group__count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  font-size: 11px;
  font-weight: 500;
  color: #969799;
  background: #f2f3f5;
  border-radius: 9px;
}

.home-group__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
}

.home-grid-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  background: #fff;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s ease;
  user-select: none;
  min-width: 0;
  overflow: hidden;
}

.home-grid-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.home-grid-item:active {
  transform: scale(0.98);
}

.home-grid-item__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  flex-shrink: 0;
}

.home-grid-item__info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.home-grid-item__label {
  font-size: 14px;
  font-weight: 500;
  color: #323233;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.home-grid-item__desc {
  font-size: 11px;
  color: #969799;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (min-width: 600px) {
  .home-group__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 800px) {
  .home-group__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
