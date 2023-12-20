import React from 'react'
import Layout from '../components/layout/Layout'
import Menu from '../components/layout/Menu'

const Dashboard = () => {
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Menu/>
                    </div>
                    <div className="col-md-9">Content</div>
                </div>
            </div>
        </Layout>

    )
}

export default Dashboard