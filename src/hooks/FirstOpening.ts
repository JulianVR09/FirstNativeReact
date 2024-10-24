import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react"

export const useFirstLaunch = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

    useEffect(()=> {
        const checkFirstLaunch = async () => {
            try {
                const hasLaunched = await AsyncStorage.getItem('hasLaunched');
                if(hasLaunched === null) {
                    setIsFirstLaunch(true);
                    await AsyncStorage.setItem('hasLaunched', 'true');
                } else {
                    setIsFirstLaunch(false);
                }
            } catch (error) {
                console.log(error);
            }
        }

        checkFirstLaunch();
    }, []);
    return isFirstLaunch
}

