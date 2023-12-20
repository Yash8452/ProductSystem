import React from 'react'
import Layout from '../components/layout/Layout'
import Menu from '../components/layout/Menu'

const ListingProduct = () => {
  return (
    <Layout>
    <div className="row">
      <div className="col-md-3">
        <Menu/>
      </div>
      <div className="col-md-9"></div>
    </div>
   </Layout>  )
}

export default ListingProduct