import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Text,
    Link,
    TxtLink
} from './styles';

export default function SignIn(){//login
    const navigation = useNavigation()


    return(
        <Container>
            <Text>SignIn</Text>
            <Link onPress={()=> navigation.navigate('SignUp')}>
                <TxtLink>Criar conta</TxtLink>
            </Link>
        </Container>
    )
}