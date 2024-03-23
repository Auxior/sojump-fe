import React, { FC } from 'react'
import { Spin } from 'antd'
import { Outlet } from 'react-router-dom'
import useLoadUserData from '../hooks/useLoadUserData'

const QuestionLayout: FC = () => {
  const { waitingUserData } = useLoadUserData()

  return (
    <>
      <p>Question layout</p>
      <div>
        {waitingUserData ? (
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Spin />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </>
  )
}

export default QuestionLayout
