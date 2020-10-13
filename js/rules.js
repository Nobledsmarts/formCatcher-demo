let rules = {
    signup : {
        username :  "required|max_length[5]|min_length[3]|regex_match[^([a-z]+)$, ig]|in_list[noble, fritx]",
        password :  "required|length_rule",
        password1 :  "required|matches[password]",
        email : "required|valid_email"
    },
    signup_errors : {
        username : {
            required : "Username cant be empty",
            max_length : "Username is too long",
            min_length : "Username is too short",
            alpha : "only aphabets are allowed",
            in_list : "you must choose either noble or fritx as a username",
            regex_match : "username should contain only alphabets"
        },
        password : {
            required : "password is required"
        },
        password1 : {
            required : "Repeat password cant be empty",
            matches : "Passwords doesnt match",
        },
        email : {
            required : "email cant be empty",
            valid_email : "the email doesnt appear to be valid"
        }
    },
    signup2 : {
        password :  "required",
        'avatar' : 'file[avatar]|max_size[avatar, 1024]'
    },
    signup2_errors : {
        password : {
            required : "password is required"
        },
    },
    signup_rules : {
        password : {
            length_rule(value, formData){

            }
        },
        username : {
            custom_rule(value, formData){
                let in_lists = ['noble', 'fritx'].includes(value);
                let alpha = /^([a-z])+$/.test(value);
                let min_len = (value.length < 5);
                if( min_len ){
                    return {
                        error : "username is too short!"
                    }
                } else if(!alpha){
                    return {
                        error : "username should contain only alphabets"
                    }
                }
                else if( !in_lists ){
                    return {
                        error : "username must be either noble or fritx"
                    };
                }
            }
        }
    }
}