# descotinuacaoapp — TravelCash (build de descontinuação)

App Expo mínimo cujo **único conteúdo é a tela de descontinuação**. Ele substitui o
app antigo (TravelCashApp) nas lojas, avisando o usuário para baixar o novo app
**TravelBACK**. Foi criado do zero (Expo SDK 54) porque o projeto antigo não compilava
mais; aqui o build é limpo.

## Identidade (NÃO alterar — precisa bater com o app publicado)

Para as lojas tratarem esta build como **atualização** do app existente (e não como um
app novo), os identificadores têm que ser os mesmos do app publicado:

- iOS `bundleIdentifier`: `org.name.TravelCashApp`
- Android `package`: `com.travelcashapp`
- EAS `projectId`: `32231918-f484-47e5-bf4c-8b3ad5f860ed` (mesmo projeto do app antigo —
  é isso que faz o EAS **reaproveitar as credenciais/keystore já existentes**)

## ⚠️ Assinatura (o ponto que pode travar a submissão)

- **Android:** a build **tem que ser assinada com a MESMA chave** do app já publicado.
  Como o `projectId` acima é o mesmo do app antigo, o EAS reutiliza o keystore existente
  automaticamente — **não deixe o EAS gerar um keystore novo** (o Play rejeita update com
  assinatura diferente). Confira com `eas credentials` (plataforma Android) que o keystore
  listado é o do app antigo antes de submeter.
- **iOS:** certificado/provisioning novos gerados pelo EAS são aceitos normalmente, desde
  que seja a **mesma conta/equipe Apple** e o mesmo bundle id.

## Pré-requisitos

```bash
npm install -g eas-cli
eas login            # conta Expo DONA do projectId acima
eas whoami
```

## Antes de publicar

1. Trocar os links reais das lojas em `src/screens/Discontinued/index.js`
   (`NEW_APP_IOS_URL`, `NEW_APP_ANDROID_URL`).
2. Conferir em `app.json` que `version`/`buildNumber`/`versionCode` ficaram **acima** do
   que já está publicado (o app antigo estava em versionCode ~474; aqui começa em 500).
   Com `appVersionSource: "remote"` + `autoIncrement`, o EAS também garante número de build
   monotônico.

## Testar (preview)

```bash
# simulador iOS (para subir no Appetize ou rodar no simulador do Xcode)
eas build --platform ios --profile simulator

# ou um preview interno
eas build --platform ios --profile preview
```

## Build + submit de produção

```bash
# iOS
eas build --platform ios --profile production
eas submit --platform ios --profile production --latest

# Android (confira o keystore com `eas credentials` antes)
eas build --platform android --profile production
eas submit --platform android --profile production --latest
```

## Review da Apple (Guideline 4.2.3)

Um app que só mostra um aviso para baixar outro app pode ser rejeitado. Cole no campo
**App Store Connect → App Review Information → Notes** (em inglês):

> This update is the final release of TravelCashApp. The service is being discontinued and
> migrated to our new app, TravelBACK (App Store: <LINK>, same developer account). This
> build shows a notice asking existing users to install the new app. After this release we
> will remove this app from sale. Thank you for your understanding.

**Plano B** se recusarem: suavizar o iOS para um aviso dispensável, ou pular a build iOS e
apenas remover o app da venda + avisar por e-mail/push.

## Descontinuação nas lojas

Depois de publicar (ou em paralelo), **remover o app da venda** no App Store Connect e no
Google Play Console — é instantâneo, não passa por revisão e impede novos downloads.
