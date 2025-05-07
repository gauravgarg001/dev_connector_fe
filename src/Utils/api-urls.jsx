const endpoint = process.env.REACT_APP_PROD_URL;
const betting= process.env.REACT_APP_BETTING_ENGINE;
const payment= process.env.REACT_APP_PAYMENT;

export const api_url = {
    login: `/signin/`,
    forgot: `/forgot-password/`,
   
    //event management
    event: (category, status) => `/event/?status=${status}&category=${category}`,
    createEvent: '/event/',
    getSingleEvent: (id)=>`/event/${id}/`,
    updateStatus: (id) => `/event/status/${id}/`,
    imageChanger: `${endpoint}/upload/image/`,
    template: `/template/`,
    singleTemplate: (id)=> `/template/${id}/`,
    optionBetList: (id) => `/bet/get-option-users/${id}/`,
    resultDeclare: `/event_result_declare/`,
    
    // fee and payout
    getCalcRate: `/get_payout_calc_odd/`,
    updateCalcRate: `/update_payout_calc_odd/`,
    getTieredShiftCap: `/get_tiered_shift_cap/`,
    updateTieredShiftCap: `/update_tiered_shift_cap/`,
    getFee: `/fee/`,
    
    // user management
    users: `/users/user/`,  
    singleUsers: (id)=> `/users/user/${id}/`,
    suspendUser: (id)=> `/users/suspend/${id}/`,    
    unSuspendUser: (id)=> `/users/unsuspend/${id}/`,
    block: (id) => `/user/block/${id}/`,
    unBlock: (id) => `/user/unblock/${id}/`,
    getPreRegister: `/users/pre-register/`,
    singleUserTxn: (id) => `txn_history/${id}`,
    singleUserWallet: (id) => `${payment}wallet_history/${id}`,
    singleUserParley: (status, auth_id) => `/get_parley_bets_for_admin/${status}/${auth_id}/`,
    singleUserParleyInfo: (status, auth_id) => `${betting}/get_parley_bet_byId_for_admin/${status}/${auth_id}/`,
    singleUserNormalBet: (status, auth_id) => `/get_bets_for_admin/${status}/${auth_id}/`,
    singleUserNormalBetInfo: (status, auth_id) => `${betting}/get_bet_byId_for_admin/${status}/${auth_id}/`,
    getUserRefered: (id) => `/referral/getReferredUserByUserId/${id}/`,
    getUserAffiliated: (id) => `/affiliate/get-referred-user-of-Affiliate/${id}/`,
    player_count: `/player/counts/`,
    
    // odds management
    getOddList: `odds/get-bet-placed-events/`,
    setOds: `/odds/set-odd/`,
    getOptionHistory: (id)=> `/bet/get-option-users/${id}/`,
    
    // cms
    uploadBanner: `/banner/save-banner/`,
    getBanner: `/banner/get-banner/`,
    deleteBanner: (id) => `/banner/delete-banner/${id}/`,
    category: `/category/`,
    specificCategory: (id)=> `/category/${id}/`,

    //pools&liquidity
    getPool: `${endpoint}/pool/get/`,
    addPool: `${endpoint}/pool/add-amount/`,
    pool_history: `${payment}pool_history/`,

    // coupon management
    createCoupen: `/coupon/create_bulk_coupon/`,
    getCoupen: `/coupon/get-all/`,
    disableCoupen: (id) => `/coupon/disable/${id}/`,

    // settings
    changePassword: `/password_reset/`,

    // payments
    getPayChannel: "/get_payment_channels_for_admin/",
    updatePayChannel: "/update_payment_channels/",
    withdrawalList: (status) => `/get_user_disbursement/${status}/`,
    withdrawalStatus: `/admin_disbursement/`,

    // affiliate
    create_req: "/affiliate/create-affiliate/",
    getAllAffilates: (page) => `/affiliate/get-all-affiliate-user/?page=${page}&per_page=10`,
    req_list: (status) => `/affiliate/getAllRequest/?status=${status}`,
    update_list: (status, req_id, desc) => `/affiliate/updateAffiliateRequest/${req_id}/?status=${status}${desc && `&description=${desc}`}`,
    issue_bonus: (id) => `affiliate/user-bonus/${id}/`, 

    //dashboard
    get_dashboard_data: "dashboard/get-all-data/",
    optional_overview: (time) => `/dashboard/optional_overview/?Range=${time}`,
    revenue: (time) => `/dashboard/revenue/?Range=${time}`,

    // finance
    finance_data: "/finance-management/get-all-data/",
    optional_overview_finance: (time) => `/finance-management/get-operational_overview/?Range=${time}`,
    revenue_finance: (time) => `/finance-management/get-revenue/?Range=${time}`,

    // reports mgmt
    report_data: "/report-analysis/get-all-data/",
    revenue_reports: (time) => `/report-analysis/get-user-management-revenue/?Range=${time}`,
    plateform_reports: (time) => `/report-analysis/get/plateform_bet/?Range=${time}`,

    allTransaction: `transaction/GetAllTransaction/`
}