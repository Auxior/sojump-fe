import React, { FC, useEffect } from 'react'
import { Form, Input } from 'antd'
import { QuestionInputPropsType } from './interface'

const PropComponent: FC<QuestionInputPropsType> = (props: QuestionInputPropsType) => {
  const { text, placeholder, onChange } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ text, placeholder })
  }, [text, placeholder])

  function handleValuesChange() {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <Form layout="vertical" initialValues={{ text, placeholder }} form={form} onValuesChange={handleValuesChange}>
      <Form.Item label="标题" name="text" rules={[{ required: true, message: '请输入标题' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Placeholder" name="placeholder">
        <Input />
      </Form.Item>
    </Form>
  )
}

export default PropComponent
