import { Checkbox, Typography } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const { Title, Paragraph } = Typography;

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`, e.target.value);
};

type SidebarMenuProps = {
  item: string[];
};

const SidebarMenu: React.FC<SidebarMenuProps> = (props) => {
  const { item } = props;
  console.log(item);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox value={item} onChange={onChange} />
      <Title level={5} style={{ margin: 5 }}>
        {item}
      </Title>
    </div>
  );
};

export default SidebarMenu;
