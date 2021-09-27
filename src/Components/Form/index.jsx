import {useState} from 'react';
import { Form,Modal, Input,Button } from 'antd';



const initState = {
    name: "",
    notes:""
  };
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const ToDo = () => {
    const [state, setState] = useState(initState);
    const [data, setData] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleClick=(e)=>{
      e.preventDefault();
      console.log("done")
          setState({name:''})
          setData(state)
   
     }
     console.log("state",state)
     console.log("data",data)

  const handleChange=(e)=>{
    const { id, value } = e.target;
    console.log(value)
          setState({ ...state, [id]: value });
  }
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <Form {...layout} name="nest-messages" onSubmit={handleClick}>
      <Form.Item
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input onChange={handleChange}
                    name='name'
                  id='name' 
                  placeholder="Enter name"
                  value={state.name}/>
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea 
        
            name='notes'
          id='notes' 
         placeholder="Enter name"
         value={state.notes}
        
        
        onChange={handleChange} />
      </Form.Item> 
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit"  onClick={handleClick}>
Add Notes        </Button >
      </Form.Item>
      <hr/>
      {
          data? 
          <><Button type="primary" onClick={showModal}>
              Open your task
            </Button>
      <Modal title= {data.name} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p> {data.notes}</p>
      
      </Modal> 
      </>
      :<p>Let`s write notes</p>
      }
    </Form>
  );
};
export default ToDo