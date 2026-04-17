FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine AS build

WORKDIR /src

COPY Pirnav.API/Pirnav.API.csproj Pirnav.API/
RUN dotnet restore Pirnav.API/Pirnav.API.csproj

COPY Pirnav.API/ Pirnav.API/
WORKDIR /src/Pirnav.API
RUN dotnet publish Pirnav.API.csproj -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine AS runtime

WORKDIR /app

ENV ASPNETCORE_URLS=http://0.0.0.0:8080
ENV ASPNETCORE_HTTP_PORTS=8080

COPY --from=build /app/publish ./

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/health >/dev/null || exit 1

ENTRYPOINT ["dotnet", "Pirnav.API.dll"]
