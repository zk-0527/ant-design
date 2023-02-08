"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8288],{13111:function(d,a,e){e.r(a);var l=e(2143),r=e(50250),m=e(59378),x=e(8910),t=e(74775),E=e(5937),c=e(2068),D=e(74399),v=e(63942),P=e(16073),p=e(24628),M=e(19260),h=e(56140),C=e(5388),O=e(49545),Z=e(6965),g=e(49706),A=e(95127),W=e(74418),U=e(73024),s=e(94065),u=e(67294),_=e(96923);function i(){var o=(0,s.eL)(),n=o.texts;return(0,_.tZ)(s.dY,null,(0,_.tZ)(u.Fragment,null,(0,_.tZ)("div",{className:"markdown"},(0,_.tZ)("p",null,n[0].value),(0,_.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,_.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,_.tZ)("ul",null,(0,_.tZ)("li",null,n[1].value,(0,_.tZ)("code",null,n[2].value),n[3].value,(0,_.tZ)("code",null,n[4].value),n[5].value,(0,_.tZ)("code",null,n[6].value),n[7].value,(0,_.tZ)("code",null,n[8].value),n[9].value),(0,_.tZ)("li",null,n[10].value,(0,_.tZ)("code",null,n[11].value),n[12].value)),(0,_.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,_.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,_.tZ)(s.Dl,{demo:{id:"components-app-demo-basic"},previewerProps:{title:"\u57FA\u672C\u7528\u6CD5",filename:"components/app/demo/basic.tsx",jsx:`import { App, Button, Space } from 'antd';

// Sub page
const MyPage = () => {
  const { message, modal, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };
  const showNotification = () => {
    notification.info({
      message: \`Notification topLeft\`,
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };
  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Button type="primary" onClick={showNotification}>
        Open notification
      </Button>
    </Space>
  );
};

// Entry component
export default () => (
  <App>
    <MyPage />
  </App>
);
`,description:"<p>\u83B7\u53D6 <code>message</code>, <code>notification</code>, <code>modal</code> \u9759\u6001\u65B9\u6CD5\u3002</p>"}}),(0,_.tZ)("div",{className:"markdown"},(0,_.tZ)("h2",{id:"\u5982\u4F55\u4F7F\u7528"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u4F7F\u7528"},(0,_.tZ)("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),(0,_.tZ)("h3",{id:"\u57FA\u7840\u7528\u6CD5"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u7528\u6CD5"},(0,_.tZ)("span",{className:"icon icon-link"})),"\u57FA\u7840\u7528\u6CD5"),(0,_.tZ)("p",null,n[13].value,(0,_.tZ)("code",null,n[14].value),n[15].value),(0,_.tZ)(t.Z,{lang:"tsx"},n[16].value),(0,_.tZ)("p",null,n[17].value),(0,_.tZ)("h3",{id:"\u4E0E-configprovider-\u5148\u540E\u987A\u5E8F"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E0E-configprovider-\u5148\u540E\u987A\u5E8F"},(0,_.tZ)("span",{className:"icon icon-link"})),"\u4E0E ConfigProvider \u5148\u540E\u987A\u5E8F"),(0,_.tZ)("p",null,n[18].value,(0,_.tZ)("code",null,n[19].value),n[20].value),(0,_.tZ)(t.Z,{lang:"tsx"},n[21].value),(0,_.tZ)("h3",{id:"\u5185\u5D4C\u4F7F\u7528\u573A\u666F\u5982\u65E0\u5FC5\u8981\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5185\u5D4C\u4F7F\u7528\u573A\u666F\u5982\u65E0\u5FC5\u8981\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957"},(0,_.tZ)("span",{className:"icon icon-link"})),"\u5185\u5D4C\u4F7F\u7528\u573A\u666F\uFF08\u5982\u65E0\u5FC5\u8981\uFF0C\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957\uFF09"),(0,_.tZ)(t.Z,{lang:"tsx"},n[22].value),(0,_.tZ)("h3",{id:"\u5168\u5C40\u573A\u666Fredux-\u573A\u666F"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5168\u5C40\u573A\u666Fredux-\u573A\u666F"},(0,_.tZ)("span",{className:"icon icon-link"})),"\u5168\u5C40\u573A\u666F\uFF08redux \u573A\u666F\uFF09"),(0,_.tZ)(t.Z,{lang:"tsx"},n[23].value),(0,_.tZ)(t.Z,{lang:"tsx"},n[24].value))))}a.default=i}}]);
