const Trending = () => {
    return(
        <span className="flex flex-wrap text-green-400">
            <svg className="h-4 w-4 mr-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M.69 11.331l1.363.338 1.026-1.611-1.95-.482a.904.904 0 10-.439 1.755zm17.791.261l-4.463 4.016-5.247-4.061a.905.905 0 00-.338-.162l-.698-.174-1.027 1.611 1.1.273 5.697 4.408a.915.915 0 001.168-.043l5.028-4.527a.9.9 0 00.064-1.277.912.912 0 00-1.284-.064zM8.684 7.18l4.887 3.129a.913.913 0 001.24-.246l5.027-7.242a.902.902 0 00-.231-1.26.91.91 0 00-1.265.23l-4.528 6.521-4.916-3.147a.915.915 0 00-.688-.123.914.914 0 00-.571.4L.142 17.209A.903.903 0 00.908 18.6a.908.908 0 00.768-.42l7.008-11z"/>
            </svg>
            trending
        </span>
    )
};

const Fresh = () => {
    return(
        <span className="flex flex-wrap text-blue-400">
            <svg className="h-4 w-4 mr-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M7.376 6.745c-.447.275 1.197 4.242 1.598 4.888a1.206 1.206 0 002.053-1.266c-.397-.648-3.205-3.898-3.651-3.622zm-.335-4.343a8.98 8.98 0 015.918 0c.329.114.765-.115.572-.611-.141-.36-.277-.712-.332-.855-.131-.339-.6-.619-.804-.665C11.623.097 10.823 0 10 0S8.377.097 7.604.271c-.204.046-.672.326-.803.665l-.332.855c-.193.496.243.726.572.611zm12.057.784a10.132 10.132 0 00-1.283-1.285c-.153-.129-.603-.234-.888.051l-1.648 1.647a9.27 9.27 0 011.155.966c.362.361.677.752.966 1.155l1.647-1.647c.286-.286.181-.735.051-.887zM10 2.9A8.1 8.1 0 001.899 11 8.1 8.1 0 0010 19.101 8.1 8.1 0 0010 2.9zm0 14.201A6.1 6.1 0 1110.001 4.9 6.1 6.1 0 0110 17.1z"/>
            </svg>
            fresh
        </span>
    )
};

export {
    Fresh,
    Trending,
  }