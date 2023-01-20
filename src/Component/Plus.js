const Plus = () => {
    return   (
        <div className="card pricing-card" >
            <div className="card-body">
                <div className="text-center">
                    <p className='muted'>PLUS</p>
                    <h1>$9<span  class="period">/month</span></h1>
                </div>
                <hr></hr>
                <div>
                <ul className="fa-ul">
                    <li className='mt-2 thick'><b>5 User</b></li>
                    <li className='mt-2 thick'>5GB Storage</li>
                    <li className='mt-2 thick'>Unlimited Public Projects</li>
                    <li className='mt-2 thick'>Community Acess</li>
                    <li className='mt-2 thick'>Unlimited Private Projects</li>
                    <li className='mt-2 thick'>Dedicated Phone Support</li>
                    <li className='mt-2 thick'>Free Subdomain</li>
                    <li className='text-muted mt-2 wrong'>Monthly Status Report</li>
                    </ul>
                    <div class="d-grid gap-2">
                    <button type="button" class="btn btn-primary">BUTTON</button>
                    </div>
                </div>
                
            </div>
        </div>
    )

}

export default Plus