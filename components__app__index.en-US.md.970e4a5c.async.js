"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2443],{66047:function(l,a,n){n.r(a);var u=n(2143),r=n(50250),m=n(59378),c=n(8910),s=n(74775),x=n(5937),E=n(2068),h=n(74399),p=n(63942),g=n(16073),P=n(24628),M=n(19260),D=n(56140),O=n(5388),v=n(49545),W=n(6965),U=n(49706),Z=n(95127),C=n(74418),f=n(73024),t=n(94065),i=n(67294),e=n(96923);function o(){var d=(0,t.eL)(),_=d.texts;return(0,e.tZ)(t.dY,null,(0,e.tZ)(i.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,_[0].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("p",null,_[1].value),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(t.Dl,{demo:{id:"components-app-demo-basic"},previewerProps:{title:"basic",filename:"components/app/demo/basic.tsx",jsx:`import { App, Button, Space } from 'antd';

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
`,description:"<p>Static method for <code>message</code>, <code>notification</code>, <code>modal</code>.</p>"}}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"how-to-use"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-use"},(0,e.tZ)("span",{className:"icon icon-link"})),"How to use"),(0,e.tZ)("h3",{id:"basic-usage"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage"},(0,e.tZ)("span",{className:"icon icon-link"})),"Basic usage"),(0,e.tZ)("p",null,_[2].value,(0,e.tZ)("code",null,_[3].value),_[4].value),(0,e.tZ)(s.Z,{lang:"tsx"},_[5].value),(0,e.tZ)("p",null,_[6].value),(0,e.tZ)("h3",{id:"sequence-with-configprovider"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-with-configprovider"},(0,e.tZ)("span",{className:"icon icon-link"})),"Sequence with ConfigProvider"),(0,e.tZ)("p",null,_[7].value,(0,e.tZ)("code",null,_[8].value),_[9].value),(0,e.tZ)(s.Z,{lang:"tsx"},_[10].value),(0,e.tZ)("h3",{id:"embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,e.tZ)("span",{className:"icon icon-link"})),"Embedded usage scenarios (if not necessary, try not to do nesting)"),(0,e.tZ)(s.Z,{lang:"tsx"},_[11].value),(0,e.tZ)("h3",{id:"global-scene-redux-scene"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#global-scene-redux-scene"},(0,e.tZ)("span",{className:"icon icon-link"})),"Global scene (redux scene)"),(0,e.tZ)(s.Z,{lang:"tsx"},_[12].value),(0,e.tZ)(s.Z,{lang:"tsx"},_[13].value))))}a.default=o}}]);
