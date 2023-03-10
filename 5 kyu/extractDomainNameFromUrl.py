#Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

#* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
#* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
#* url = "https://www.cnet.com"                -> domain name = cnet"

def domain_name(url):
    
    if "https://www" in url: 
        y = url.replace("https://www.", "").split(".")
        return y[0]
    elif "http://www" in url: 
        y = url.replace("http://www.", "").split(".")
        return y[0]
    elif "http://" in url:
        y = url.replace("http://", "").split(".")
        return y[0]
    elif "https://" in url:
        y = url.replace("https://", "").split(".")
        return y[0]
    else:
        y = url.replace("www.", "").split(".")
        return y[0]
