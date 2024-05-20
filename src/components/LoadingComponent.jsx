import React from 'react'

function LoadingComponent() {
  return (
    <div className='h-[100vh] flex items-center justify-center mx-auto'
        style={{
            display: 'inline-block',
            width: '64px',
            height: '64px',
            border: '5px solid #ccc',
            borderRadius: '50%',
            borderTopColor: '#007bff',
            animation: 'spin 1s linear infinite',
            margin: '0 auto',
        }}
    ></div>
  )
}

export default LoadingComponent