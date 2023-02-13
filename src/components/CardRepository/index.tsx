import React from "react"
import theme from "../../core/theme"
import Tech from "../Tech"
import {
  Container,
  Title,
  CardHeader,
  TitleView,
  Icon,
  Divider,
  Text,
  CardFooter,
  FavoriteButton,
  TextButton,
  StarIcon,
  StarsCount,
} from "./styles"
import {
  Repository,
  useRepositoryContext,
} from "../../core/context/RepositoryContext"
import { NavigationProps } from "../../core/routes/Stack.router"

type Props = {
  noFavButton?: any
  data: Repository
  navigation: NavigationProps["navigation"]
}

export default function CardRepository({
  data,
  noFavButton,
  navigation,
}: Props) {
  const [user, repoName] = data?.name.split(`/`)

  const toDetails = () => {
    navigation.navigate("Details", {
      ...data,
    })
  }

  const { addFavoriteRepository } = useRepositoryContext()


  return (
    <Container style={theme.boxShadow} onPress={toDetails}>
      <CardHeader>
        <TitleView>
          <Title>{user}/</Title>
          <Title bold>{repoName}</Title>
        </TitleView>
        <Icon source={{ uri: data.owner.avatar_url }} />
      </CardHeader>
      <Divider />
      <Text m="16px 0" numberOfLines={2}>
        {data.description}
      </Text>

      <CardFooter>
        {!noFavButton && (
          <FavoriteButton onPress={() => addFavoriteRepository(data)}>
            <StarIcon />
            <TextButton>Favoritar</TextButton>
          </FavoriteButton>
        )}

        <StarsCount>
          <StarIcon />
          <Text m="0 0 0 6px">{data.stars}</Text>
        </StarsCount>
        <Tech language={data.language} />
      </CardFooter>
    </Container>
  )
}
