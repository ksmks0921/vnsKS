const nonceUrl = "http://vns2.quickflik.co.uk/api/get_nonce/?controller=user&method=register";
const signUpUrl ="https://vns2.quickflik.co.uk/api/signup/?auth_key=Lv7pdgLKkSW7E3wF4qoGoKCyY";
const signInUrl ="https://vns2.quickflik.co.uk/api/login/?";
const getFeedDataUrl = "https://vns2.quickflik.co.uk/api/getposts/?perpage=100&auth_key=Lv7pdgLKkSW7E3wF4qoGoKCyY";
// const getDetailDataUrl = "https://vns2.quickflik.co.uk/api/getpost/?custom_post=ct_channel&auth_key=Lv7pdgLKkSW7E3wF4qoGoKCyY";
const getAllLogoUrl = "https://vns2.quickflik.co.uk/api/getposts/?custom_post=ct_channel&perpage=100&auth_key=Lv7pdgLKkSW7E3wF4qoGoKCyY";
const getAboutDataUrl = "https://vns2.quickflik.co.uk/api/getpost/?custom_post=ct_channel&auth_key=Lv7pdgLKkSW7E3wF4qoGoKCyY";
const getBodDataUrl = "https://vns2.quickflik.co.uk/api/getpost/?custom_post=ct_actor&perpage=100&auth_key=Lv7pdgLKkSW7E3wF4qoGoKCyY";
const subscribeUrl = "https://vns2.quickflik.co.uk/wp-admin/admin-ajax.php";
const watchLaterUrl = "https://vns2.quickflik.co.uk/wp-admin/admin-ajax.php";
const videoSearchUrl = "https://vns2.quickflik.co.uk/api/search_posts/?search_level=0&auth_key=Lv7pdgLKkSW7E3wF4qoGoKCyY&callpage=1&perpage=100";
const companySearchUrl = "https://vns2.quickflik.co.uk/api/search_posts/?search_level=0&auth_key=Lv7pdgLKkSW7E3wF4qoGoKCyY&callpage=1&perpage=100&custom_post=ct_channel";
const profileUpdateUrl = "https://vns2.quickflik.co.uk/api/edit_profile/?auth_key=Lv7pdgLKkSW7E3wF4qoGoKCyY";
const registerDdeviceTokenUrl ="https://vns2.quickflik.co.uk/push/savetoken/?auth_key=FDcWZN3y39n8lDIV605gvP7sV&device_type=ios";
const getNotifyDataUrl = "https://vns2.quickflik.co.uk/push/get_archive/?auth_key=FDcWZN3y39n8lDIV605gvP7sV&orderby=date&order=desc&perpage=100";

const api = {

    signIn(UserData) {
        console.log('signIn API_________')
        console.log("user: ", UserData);
        var url =  signInUrl + "username=" + UserData.email + "&password=" + UserData.password + "&auth_key=Lv7pdgLKkSW7E3wF4qoGoKCyY";
        console.log("url____"+url);
        result = fetch(url, {
            method: 'GET'
        }).then((response) => response.json());
        
        return result;
    },

    signUp(UserData) {
        console.log("signUp__API____________________    ")
        console.log("user______: ", UserData);
        var url =  signUpUrl + "&first_name=" + UserData.firstName  + "&last_name=" + UserData.lastName + "&username=" + UserData.userName + "&email=" + UserData.email + "&password=" + UserData.password  
        
        result = fetch(url, {
            method: 'GET'
        }).then((response) => response.json());
        
        return result;
    },

    getAllLogo() {
        console.log("getAllLogo_API______");
        result = fetch(getAllLogoUrl, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
            })
        }).then((response) => response.json());
        
        return result;
    },

    getFeedData() {
        console.log("getFeedData_API______");
        result = fetch(getFeedDataUrl, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
            })
        }).then((response) => response.json());
        
        return result;
    },

    getAboutData(post_id) {
        var url = getAboutDataUrl + "&post_id=" + post_id
        console.log("getAboutData_API______");
        result = fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
            })
        }).then((response) => response.json());
        
        return result;
    },

    getBodData(post_id) {
        
        console.log("getBodData_API______");
        var url =getBodDataUrl + "&post_id=" + post_id
        result = fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
            })
        }).then((response) => response.json());
        
        return result;
    },

    subscribe(channel_id, user_id){
        console.log("===subscribe_API");
        console.log("id====="+ channel_id);
        console.log("user_id===" + user_id);
        let formdata = new FormData();
        formdata.append("action", "videopro_subscribe")
        formdata.append("id", channel_id)
        formdata.append("id_user", user_id)
        
        result = fetch(subscribeUrl,{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formdata
        }).then((response) => response.json());

        return result;
    },

    watchLater(id, company_name, session_id){
        console.log("===watchLater_API");
        console.log("id====="+ id);
        console.log("company_name===" + company_name);
        console.log("session_id===" + session_id);

        let formdata = new FormData();
        formdata.append("action", "add_watch_later")
        formdata.append("do", "remove")
        formdata.append("url", "https://vns2.quickflik.co.uk/Company-Channel/" + company_name)
        formdata.append("auth_key", "Lv7pdgLKkSW7E3wF4qoGoKCyY")
        formdata.append("id", id)
        formdata.append("SESSION_ID", session_id)
        
        result = fetch(watchLaterUrl,{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formdata
        }).then((response) => response.json());

        return result;
    },

    videoSearch(searchKeyword) {
        var url = videoSearchUrl + "&query=" + searchKeyword
        console.log("videoSearch_API______");
        result = fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
            })
        }).then((response) => response.json());
        
        return result;
    },

    companySearch(searchKeyword) {
        var url = companySearchUrl + "&query=" + searchKeyword
        console.log("companySearch_API______");
        result = fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
            })
        }).then((response) => response.json());
        
        return result;
    },

    profileUpdate(UserData) {
        console.log("profileUpdate_API______");

        console.log("UserData===");
        console.log( UserData);
        var url = profileUpdateUrl  + "&SESSION_ID=" + UserData.session_id + "&first_name=" + UserData.firstName  + "&last_name=" + UserData.lastName +  "&email=" + UserData.email + "&password=" + UserData.password
        console.log("profile Update URL"+ url);
        result = fetch(url, {
            method: 'post',
            headers: {
               
            },
            body: JSON.stringify({
            //    first_name: UserData.firstName,
            //    last_name: UserData.lastName, 
            //    email: UserData.email,
            //    password:UserData.password,
            //    "SESSION_ID": UserData.session_id,
               file64: UserData.avatar,
            })
        }).then((response) => response.json());
        
        return result;
    },
    
    registerDdeviceToken(fcmToken) {
        console.log('registerDdeviceToken API_________')
       
        var url =  registerDdeviceTokenUrl + "&device_token=" + fcmToken;
        console.log(" registerDdeviceToken url____"+url);
        result = fetch(url, {
            method: 'GET'
        }).then((response) => response.json());
        
        return result;
    },

    getNotifyData() {
        console.log('getNotifyData API_________');
        
        result = fetch(getNotifyDataUrl, {
            method: 'GET'
        }).then((response) => response.json());
        
        return result;
    },


    
    
       
}

module.exports = api;
